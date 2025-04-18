import { Repository } from 'typeorm';

export async function updateDynamicTableRow(
    repo: Repository<any>,
    tableName: string,
    updateFields: Record<string, any>,
    whereFields: Record<string, any>,
): Promise<void> {
    const setKeys = Object.keys(updateFields);
    const whereKeys = Object.keys(whereFields);

    const setClause = setKeys.map(key => `${key} = ?`).join(', ');
    const whereClause = whereKeys.map(key => `${key} = ?`).join(' AND ');

    const sql = `UPDATE ${tableName} SET ${setClause} WHERE ${whereClause}`;

    const params = [...setKeys.map(k => updateFields[k]), ...whereKeys.map(k => whereFields[k])];

    await repo.query(sql, params);
}

 