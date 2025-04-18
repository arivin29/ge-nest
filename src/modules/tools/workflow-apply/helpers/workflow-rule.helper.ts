import { EntityManager } from 'typeorm';

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
            const { table, min, filter }: { table: string, min: number, filter: Record<string, string> } = rule;

            const whereClause = Object.entries(filter)
                .map(([key, val]) => `${key} = '${val.replace('{{id}}', context.id)}'`)
                .join(' AND ');

            const sql = `SELECT COUNT(*) as total FROM ${context.db}.${table} WHERE ${whereClause}`;
            const [result] = await context.queryRunner.query(sql);
            const total = result?.total ?? 0;

            if (total < min) return false;
        }


        // ✅ 3. Custom SQL
        if (type === 'custom_sql') {
            const sql = rule.query.replace('{{id}}', context.id);
            const [result] = await context.queryRunner.query(sql);

            if (rule.min !== undefined && result?.[Object.keys(result)[0]] < rule.min) {
                return false;
            }
            if (rule.equals !== undefined && result?.[Object.keys(result)[0]] !== rule.equals) {
                return false;
            }
        }
    }

    return true;
}
