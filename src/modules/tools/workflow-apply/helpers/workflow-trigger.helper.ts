import { EntityManager } from 'typeorm';

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
    if (!triggerJson || !Array.isArray(triggerJson.triggers)) return;

    for (const trigger of triggerJson.triggers) {
        const type = trigger.type;

        // ✅ 1. UPDATE
        if (type === 'update') {
            const db = trigger.db || context.db;
            const table = `${db}.${trigger.target_table}`;
            const setClauses = Object.entries(trigger.set)
                .map(([key, val]) => `${key} = '${renderTemplate(val, context)}'`)
                .join(', ');

            const whereClauses = Object.entries(trigger.condition || {})
                .map(([key, val]) => `${key} = '${renderTemplate(val, context)}'`)
                .join(' AND ');

            const sql = `UPDATE ${table} SET ${setClauses} WHERE ${whereClauses}`;
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
    return val.replace(/\{\{(.*?)\}\}/g, (_, key) => {
        return context.data?.[key.trim()] ?? '';
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
