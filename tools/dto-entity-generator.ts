// tools/dto-entity-generator.ts
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import { execSync } from 'child_process';
import { pascalCase } from 'change-case';
import 'dotenv/config';

const MODULES_PATH = path.resolve(__dirname, '../src/modules');
const TEMPLATES_PATH = path.resolve(__dirname, './templates');
const TEMP_ENTITY_OUTPUT = path.resolve(__dirname, './__generated__/entities');


async function generateEntityAndDtoOnly(table: string, moduleName: string, dbName: string) {
    const className = pascalCase(moduleName);
    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        db: dbName,
    };

    fs.mkdirSync(TEMP_ENTITY_OUTPUT, { recursive: true });
    fs.readdirSync(TEMP_ENTITY_OUTPUT).forEach((f) =>
        fs.unlinkSync(path.join(TEMP_ENTITY_OUTPUT, f))
    );

    const command = `typeorm-model-generator -h ${dbConfig.host} -d ${dbConfig.db} -u ${dbConfig.user} -x ${dbConfig.pass} -e mysql --noConfig --cf pascal  -o ${TEMP_ENTITY_OUTPUT} --tables ${table}`;

    console.log('🛠️  Regenerating entity from table:', table);
    execSync(command, { stdio: 'inherit' });

    const entityFile = fs.readdirSync(TEMP_ENTITY_OUTPUT).find(f => f.endsWith('.ts'));
    if (!entityFile) throw new Error('Entity not generated');

    let entityContent = fs.readFileSync(path.join(TEMP_ENTITY_OUTPUT, entityFile), 'utf-8');
    entityContent = addPrimaryColumnToView(entityContent, table);

    const entityFolder = path.join(MODULES_PATH, moduleName, 'entities');
    fs.mkdirSync(entityFolder, { recursive: true });
    fs.writeFileSync(path.join(entityFolder, `${moduleName}.entity.ts`), entityContent);
    console.log(`✅ Entity updated for '${table}' as '${moduleName}.entity.ts'`);

    // Generate DTO
    const propRegex = /@Column\((?:.|\n)*?\)\s*(public\s+)?(\w+):\s*([\w\[\]\s\|]+);/gm;
    const properties: { name: string; type: string; optional: boolean }[] = [];
    let match;
    while ((match = propRegex.exec(entityContent)) !== null) {
        const [, , name, typeRaw] = match;
        const isOptional =
            typeRaw.includes('null') ||
            name.toLowerCase().includes('created') ||
            name.toLowerCase().includes('updated');

        const typeClean = typeRaw.replace(/\s*\|\s*null/g, '').trim();
        const type = typeClean.includes('Date') ? 'Date' : typeClean;

        properties.push({ name, type, optional: isOptional });
    }

    const dtoFolder = path.join(MODULES_PATH, moduleName, 'dto');
    fs.mkdirSync(dtoFolder, { recursive: true });

    const dtoContent = await ejs.renderFile(path.join(TEMPLATES_PATH, 'dto.ejs'), {
        className,
        properties,
    });

    const dtoFileName = `${moduleName.replace(/[-\s]/g, '_')}.dto.ts`;
    fs.writeFileSync(path.join(dtoFolder, dtoFileName), dtoContent);
    console.log(`📦 DTO regenerated: ${dtoFileName}`);
}

function addPrimaryColumnToView(entityContent: string, table: string): string {
    if (!table.startsWith('v_')) return entityContent;

    // Ambil nama setelah 'v_' → untuk mencari field id_xxx
    const baseName = table.replace(/^v_/, '');
    const primaryFieldRegex = new RegExp(`(public\\s+)?(id_${baseName})[:\\s\\w|]+;`, 'i');
    const match = entityContent.match(primaryFieldRegex);

    if (!match) {
        console.warn(`⚠️ Tidak menemukan field id_${baseName} di entity. Primary column tidak ditambahkan.`);
        return entityContent;
    }

    const fieldName = match[2]; // id_due_list_output misalnya
    const camelName = fieldName.replace(/_([a-z])/g, (_, l) => l.toUpperCase());

    // Tambahkan dekorator @PrimaryColumn di atas field tersebut
    const updatedContent = entityContent.replace(
        new RegExp(`(@Column\\([^)]*\\)\\s*public\\s+${fieldName}\\s*:\\s*[\\w|\\s]+;)`, 'i'),
        `@PrimaryColumn({ name: '${fieldName}' })\n    ${camelName}: string;`
    );

    // Tambahkan import PrimaryColumn jika belum ada
    if (!updatedContent.includes('PrimaryColumn')) {
        return updatedContent.replace(
            /import\s+\{([^}]*)\}\s+from\s+'typeorm';/,
            (match, imports) => {
                if (imports.includes('PrimaryColumn')) return match;
                return `import {${imports}, PrimaryColumn} from 'typeorm';`;
            }
        );
    }

    return updatedContent;
}


async function main() {
    const args = process.argv.slice(2);
    const fromTable = args.find(a => a.startsWith('--fromTable='))?.split('=')[1];
    const moduleName = args.find(a => a.startsWith('--nama='))?.split('=')[1];
    const dbName = args.find(a => a.startsWith('--db='))?.split('=')[1];

    if (!fromTable || !moduleName || !dbName) {
        console.log('❌ Gunakan: --fromTable=nama_tabel --nama=nama_module --db=nama_database');
        process.exit(1);
    }

    await generateEntityAndDtoOnly(fromTable, moduleName, dbName);
}

main().catch(err => console.error('❌ DTO/Entity generator failed:', err));
