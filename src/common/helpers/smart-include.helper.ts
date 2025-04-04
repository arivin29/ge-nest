import { EntityManager, In } from 'typeorm';
import { SmartQueryInput } from './smart-query-engine-join-mode';

const toCamel = (s: string) => s.replace(/_([a-z])/g, (_, g) => g.toUpperCase());

export async function applySmartInclude(
    data: any[],
    include: SmartQueryInput['include'],
    repoManager: EntityManager,
    baseAlias: string = 'e'
): Promise<void> {
    if (!include?.length || !data?.length) return;

    // Normalisasi include agar semua punya "parent"
    include = include.map((inc) => ({
        ...inc,
        parent: inc.parent ?? inc.to ?? baseAlias,
    }));

    for (const inc of include) {
        const relation = inc.name;
        const parent: string = inc.parent!;
        const relationRepo = repoManager.getRepository(relation);
        const camel = toCamel(relation);

        if (inc.type === 'single') {
            const fk = toCamel(`id_${relation}`);
            const pk = toCamel(`id_${relation}`);

            // Ambil list ref ID dari parent field
            const parents = data.flatMap((d) => {
                if (parent === baseAlias) return [d];
                return d[parent] ? [d[parent]] : [];
            });

            const ids = [...new Set(parents.map(p => p?.[fk])).values()].filter(Boolean);
            if (!ids.length) continue;

            const rows = await relationRepo.find({
                where: { [pk]: In(ids) },
                ...(inc.select ? { select: inc.select } : {}),
            });

            const map = new Map(rows.map(r => [r[pk], r]));

            data.forEach(d => {
                const parentRef = parent === baseAlias ? d : d[parent];
                if (!parentRef) return;
                parentRef[camel] = map.get(parentRef[fk]) ?? null;
            });
        }

        if (inc.type === 'array') {
            const fk = toCamel(`id_${parent}`);
            const pk = toCamel(`id_${parent}`);

            const ids = data
                .flatMap((d) => (parent === baseAlias ? [d] : [d[parent]]))
                .map(p => p?.[pk])
                .filter(Boolean);

            if (!ids.length) continue;

            const rows = await relationRepo.find({
                where: { [fk]: In(ids) },
                ...(inc.select ? { select: inc.select } : {}),
            });

            const grouped = rows.reduce((acc, row) => {
                const key = row[fk];
                if (!acc[key]) acc[key] = [];
                acc[key].push(row);
                return acc;
            }, {} as Record<string, any[]>);

            data.forEach(d => {
                const parentRef = parent === baseAlias ? d : d[parent];
                if (!parentRef) return;
                parentRef[camel] = grouped[parentRef[pk]] ?? [];
            });
        }
    }
}
