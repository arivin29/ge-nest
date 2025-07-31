import { EntityManager, In } from 'typeorm';
import { SmartQueryInput } from './smart-query-engine-join-mode';
import { dataSourceMap } from 'src/config/data-source-map';
import { EntityDatabaseMap } from 'src/config/entity-database-map';
import { pascalCase, snakeCase } from 'change-case';
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
        const camel = toCamel(relation);
        const pascal = pascalCase(relation); // 🔥 fix utama

        // 🔍 Ambil database dari entity (support alias)
        const foundEntry = Object.entries(EntityDatabaseMap).find(
            ([entityName, meta]) => {
                return entityName === pascal || meta.aliases?.includes(relation);
            }
        );


        if (!foundEntry) {
            console.warn(`⚠️ Repo untuk '${relation}' tidak ditemukan di EntityDatabaseMap.`);
            continue;
        }

        const [entityName, meta] = foundEntry;
        const dbName = meta.db;

        if (!dataSourceMap[dbName]) {
            console.warn(`⚠️ Database source untuk '${dbName}' tidak ditemukan di dataSourceMap.`);
            continue;
        }
        const relationRepo = dataSourceMap[dbName].getRepository(entityName);

        if (inc.type === 'single') {
            const fk = toCamel(`id_${relation}`);
            const pk = toCamel(`id_${relation}`);

            const parents = data.flatMap((d) => {
                const ref = parent === baseAlias ? d : safeGetNested(d, parent);
                return ref ? [ref] : [];
            });

            const ids = [...new Set(parents.map(p => p?.[fk])).values()].filter(Boolean);
            if (!ids.length) continue;

            const rows = await relationRepo.find({
                where: { [pk]: In(ids) },
                ...(inc.select ? { select: inc.select } : {}),
            });

            const map = new Map(rows.map(r => [r[pk], r]));
            data.forEach(d => {
                const parentRef = parent === baseAlias ? d : safeGetNested(d, parent);
                if (!parentRef) return;
                parentRef[camel] = map.get(parentRef[fk]) ?? null;
            });
        }

        if (inc.type === 'array') {
            const targetAlias = inc.to ?? baseAlias;
            const camel = toCamel(inc.name);

            // Step 1: deteksi langsung apakah `data[]` adalah targetAlias
            const possibleKeys = Object.keys(data[0] ?? {});
            const matchIdField = possibleKeys.find(k => k.toLowerCase().startsWith(`id${pascalCase(targetAlias).toLowerCase()}`));

            if (!matchIdField) {
                console.warn(`⚠️ Tidak ditemukan field id untuk '${targetAlias}' pada data utama.`);
                continue;
            }

            const pkField = matchIdField;

            // Step 2: Ambil ID untuk join
            const ids = data.map(d => d?.[pkField]).filter(Boolean);
            if (!ids.length) continue;

            // Step 3: Ambil dari repo relasi
            const rows = await relationRepo.find({
                where: { [pkField]: In(ids) },
                ...(inc.select ? { select: inc.select } : {}),
            });

            // Step 4: Group berdasarkan foreign key
            const grouped = rows.reduce((acc, row) => {
                const key = row[pkField];
                if (!acc[key]) acc[key] = [];
                acc[key].push(row);
                return acc;
            }, {} as Record<string, any[]>);

            // Step 5: Inject ke object utama
            for (const row of data) {
                const idVal = row?.[pkField];
                if (!idVal) continue;
                row[camel] = grouped[idVal] ?? [];
            }
        }
    }
}

function safeGetNested(obj: any, path: string): any {
    return path.split('.').reduce((acc, part) => acc?.[toCamel(part)], obj);
}