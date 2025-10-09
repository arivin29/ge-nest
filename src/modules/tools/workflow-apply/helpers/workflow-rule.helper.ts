/**
 * Konteks untuk validasi rule
 */
interface RuleValidationContext {
    id: string;
    data: any;                       // data utama (misal contract)
    db: string;                      // database asal (misal erp_pelanggan)
    queryRunner: { query: (sql: string, params?: any[]) => Promise<any> };
}

export async function validateWorkflowRules(
    ruleJson: any,
    context: RuleValidationContext,
): Promise<boolean> {
    if (!ruleJson || !Array.isArray(ruleJson.rules)) {
        return true; // jika tidak ada rule dianggap lolos
    }

    for (const rule of ruleJson.rules) {
        const type = rule.type;

        // ✅ 1. Field check
        if (type === 'field_check') {
            const { field, operator } = rule;
            const value = context.data?.[field];

            if (operator === 'IS NOT NULL' && (value === null || value === undefined)) {
                return false;
            }
            if (operator === '=' && value !== rule.value) {
                return false;
            }
            // tambahkan operator lain sesuai kebutuhan
        }

        // ✅ 2. Count check (jumlah data di tabel lain)
        if (type === 'count_check') {
            const { table, min, filter = {}, db }: { table: string; min: number; filter?: Record<string, string>; db?: string } = rule;

            if (!table) {
                throw new Error('count_check rule membutuhkan nama table');
            }

            const targetDb = db || context.db;
            const qualifiedTable = table.includes('.') ? table : `${targetDb}.${table}`;

            const filters = Object.entries(filter);
            const whereClause = filters.length
                ? filters
                    .map(([key, val]) => `${key} = '${renderTemplate(val, context)}'`)
                    .join(' AND ')
                : '1=1';

            const sql = `SELECT COUNT(*) as total FROM ${qualifiedTable} WHERE ${whereClause}`;
            const [result] = await context.queryRunner.query(sql);
            const total = result?.total ?? 0;

            if (total < min) return false;
        }


        // ✅ 3. Custom SQL
        if (type === 'custom_sql') {
            let sql = renderTemplate(rule.query, context);
            enforceSelectOnly(sql);

            let resultRow: any;
            try {
                const [result] = await context.queryRunner.query(sql);
                resultRow = result;
            } catch (error) {
                console.error('[workflow-rule] custom_sql gagal dieksekusi', { sql, error });
                throw new Error('Custom SQL rule gagal dijalankan. Periksa kembali syntax dan aksesnya.');
            }

            const firstValue = resultRow?.[Object.keys(resultRow)[0]];

            if (rule.min !== undefined && firstValue < rule.min) {
                return false;
            }
            if (rule.equals !== undefined && firstValue !== rule.equals) {
                return false;
            }
        }
    }

    return true;
}

function renderTemplate(val: string, context: RuleValidationContext): string {
    if (!val) return val;
    let result = val.replace(/\{\{\s*id\s*\}\}/gi, context.id);
    result = result.replace(/\$id\b/gi, context.id);

    result = result.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key) => {
        const parts = key.split('.');
        let current: any = context.data;
        for (const part of parts) {
            current = current?.[part];
            if (current === undefined || current === null) {
                return '';
            }
        }
        return String(current);
    });

    if (typeof context.data === 'object' && context.data !== null) {
        result = result.replace(/\$([\w.]+)/g, (_, key) => {
            if (key === 'id') return context.id;
            const parts = key.split('.');
            let current: any = context.data;
            for (const part of parts) {
                current = current?.[part];
                if (current === undefined || current === null) {
                    return '';
                }
            }
            return String(current);
        });
    }

    return result;
}

function enforceSelectOnly(sql: string): void {
    const normalized = sql.trim().toLowerCase();
    if (!normalized.startsWith('select')) {
        throw new Error('Custom SQL rule hanya boleh menjalankan perintah SELECT.');
    }

    const forbiddenKeywords = ['update', 'delete', 'insert', 'drop', 'alter', 'create', 'truncate'];
    for (const keyword of forbiddenKeywords) {
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (regex.test(sql)) {
            throw new Error(`Custom SQL rule tidak boleh mengandung kata kunci "${keyword}".`);
        }
    }

    if (normalized.includes(';')) {
        throw new Error('Custom SQL rule tidak boleh mengandung karakter titik koma (;)');
    }
}
