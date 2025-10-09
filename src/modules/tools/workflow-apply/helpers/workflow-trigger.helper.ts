/**
 * Konteks untuk trigger
 */
interface TriggerContext {
    id: string;
    data: any;
    db: string;
    queryRunner: { query: (sql: string, params?: any[]) => Promise<any> };
}

export async function executeWorkflowTriggers(
    triggerJson: any,
    context: TriggerContext,
): Promise<void> {
    const triggers = normalizeTriggers(triggerJson);
    if (!triggers.length) return;

    for (const trigger of triggers) {
        const type = trigger.type;

        if (type === 'sql') {
            await executeSqlTrigger(trigger, context);
            continue;
        }

        // ✅ 1. UPDATE
        if (type === 'update') {
            const db = trigger.db || context.db;
            if (!trigger.target_table) {
                console.warn('[workflow-trigger] abaikan trigger update tanpa target_table', trigger);
                continue;
            }
            const qualifiedTable = db ? `\`${db}\`.\`${trigger.target_table}\`` : trigger.target_table;
            const setEntries = Object.entries(trigger.set || {});
            if (!setEntries.length) {
                console.warn('[workflow-trigger] abaikan trigger update tanpa field set', trigger);
                continue;
            }

            const setClauses = setEntries
                .map(([key, val]) => `${key} = '${renderTemplate(val, context)}'`)
                .join(', ');

            const conditionEntries = Object.entries(trigger.condition || {});
            if (!conditionEntries.length) {
                console.warn('[workflow-trigger] abaikan trigger update tanpa kondisi', trigger);
                continue;
            }

            const whereClauses = conditionEntries
                .map(([key, val]) => `${key} = '${renderTemplate(val, context)}'`)
                .join(' AND ');

            const sql = `UPDATE ${qualifiedTable} SET ${setClauses} WHERE ${whereClauses}`;
            await context.queryRunner.query(sql);
        }

        // ✅ 2. NOTIFICATION (simulasi log sementara)
        if (type === 'notification') {
            const to = renderTemplate(trigger.to, context);
            const template = trigger.template;
            console.log(`📩 Kirim notifikasi ke ${to} dengan template "${template}"`);
            // TODO: integrate ke email/WA/scheduler notif
        }

        // ✅ 3. WEBHOOK (simulasi log)
        if (type === 'webhook') {
            const url = renderTemplate(trigger.url, context);
            const method = trigger.method || 'POST';
            const payload = JSON.stringify(trigger.payload || {});
            console.log(`🌐 Trigger webhook ${method} ${url} dengan payload: ${payload}`);
            // TODO: kirim real request pakai Axios/fetch jika perlu
        }

        // ✅ 4. FUTURE: Kafka Job, Scheduler, dsb bisa di sini
    }
}
function renderTemplate(val: any, context: TriggerContext): string {
    if (typeof val !== 'string') return val;
    let result = val.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        return context.data?.[key.trim()] ?? '';
    });
    result = result.replace(/\$id\b/gi, context.id);
    return result;
}

function normalizeTriggers(triggerJson: any): any[] {
    if (!triggerJson) return [];
    if (Array.isArray(triggerJson)) return triggerJson;
    if (Array.isArray(triggerJson.triggers)) return triggerJson.triggers;
    if (triggerJson.type) return [triggerJson];
    return [];
}

async function executeSqlTrigger(trigger: any, context: TriggerContext): Promise<void> {
    if (!trigger?.query) return;

    const db = trigger.db || context.db;
    let sql = renderTemplate(trigger.query, context);
    sql = qualifySqlWithDb(sql, db);
    console.log('[workflow-trigger] execute sql', { sql, db, triggerDb: trigger.db });
    await context.queryRunner.query(sql);
}

function qualifySqlWithDb(sql: string, db?: string): string {
    if (!db) return sql;
    return sql.replace(/\bupdate\s+`?([a-zA-Z0-9_]+)`?/gi, (match, table) => {
        if (table.includes('.')) return match;
        return `UPDATE \`${db}\`.\`${table}\``;
    });
}


//example triger json
// {
//     "triggers": [
//         {
//             "type": "update",
//             "target_table": "contract_site",
//             "db": "erp_pelanggan",
//             "condition": {
//                 "id_contract": "{{id}}"
//             },
//             "set": {
//                 "status_contract_site": "aktif"
//             }
//         },
//         {
//             "type": "notification",
//             "to": "client",
//             "template": "kontrak_aktif"
//         }
//     ]
// }
