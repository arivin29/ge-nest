import { ObjectLiteral, SelectQueryBuilder } from 'typeorm';

export function applyDynamicJoin<T extends ObjectLiteral>(
    qb: SelectQueryBuilder<T>,
    include: { name: string; type?: 'left' | 'inner' | 'one-to-many' }[] = [],
    joinMap: Record<string, { field: string; alias: string }>
): void {
    include.forEach(({ name, type }) => {
        const config = joinMap[name];
        if (!config) return;

        const joinType = type ?? 'left'; // default
        const method = joinType === 'inner' ? 'innerJoinAndSelect' : 'leftJoinAndSelect';

        if (joinType === 'one-to-many') {
            qb.leftJoinAndSelect(config.field, config.alias);
            qb.distinct(true); // hindari duplikat
        } else {
            qb[method](config.field, config.alias);
        }
    });
}
