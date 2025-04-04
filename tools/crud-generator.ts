// tools/crud-generator.ts
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import inquirer from 'inquirer';
import { execSync } from 'child_process';
import { pascalCase, kebabCase } from 'change-case';
import 'dotenv/config';

const MODULES_PATH = path.resolve(__dirname, '../src/modules');
const TEMPLATES_PATH = path.resolve(__dirname, './templates');
const APP_MODULE_PATH = path.resolve(__dirname, '../src/app.module.ts');
const ROUTER_CONFIG_PATH = path.resolve(__dirname, '../src/router.config.ts');

const TEMP_ENTITY_OUTPUT = path.resolve(__dirname, './__generated__/entities');

async function generateEntityFromTable(table: string, className: string, moduleName: string, dbName: string) {
    const dbConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        pass: process.env.DB_PASSWORD,
        db: dbName,
    };

    fs.mkdirSync(TEMP_ENTITY_OUTPUT, { recursive: true }); // ✅ Pastikan folder ada


    // ✅ Hapus semua file sebelumnya agar tidak bentrok
    fs.readdirSync(TEMP_ENTITY_OUTPUT).forEach((f) =>
        fs.unlinkSync(path.join(TEMP_ENTITY_OUTPUT, f))
    );

    const command = `typeorm-model-generator -h ${dbConfig.host} -d ${dbConfig.db} -u ${dbConfig.user} -x ${dbConfig.pass} -e mysql --noConfig --cf pascal  -o ${TEMP_ENTITY_OUTPUT} --tables ${table}`;

    console.log('🛠️  Generating entity from table:', table);
    execSync(command, { stdio: 'inherit' });

    const entityFile = fs.readdirSync(TEMP_ENTITY_OUTPUT).find(f => f.endsWith('.ts'));
    const generatedFiles = fs.readdirSync(TEMP_ENTITY_OUTPUT);
    console.log('📁 Generated files:', generatedFiles);

    if (!entityFile) throw new Error('Entity not generated');

    const entityContent = fs.readFileSync(path.join(TEMP_ENTITY_OUTPUT, entityFile), 'utf-8');
    const entityFolder = path.join(MODULES_PATH, moduleName, 'entities');
    fs.mkdirSync(entityFolder, { recursive: true });
    fs.writeFileSync(path.join(entityFolder, `${moduleName}.entity.ts`), entityContent);
    console.log(`✅ Entity generated for '${table}' as '${moduleName}.entity.ts'`);
    
    const entityTargetPath = path.join(entityFolder, `${moduleName}.entity.ts`);
    await generateDtoFromEntity(entityTargetPath, className, moduleName);
}

async function generateDtoFromEntity(entityPath: string, className: string, moduleName: string) {
    const raw = fs.readFileSync(entityPath, 'utf-8');
    const dtoFolder = path.join(MODULES_PATH, moduleName, 'dto');
    fs.mkdirSync(dtoFolder, { recursive: true });

    const propRegex = /@Column\((?:.|\n)*?\)\s*(public\s+)?(\w+):\s*([\w\[\]\s\|]+);/gm;
    const properties: { name: string; type: string; optional: boolean }[] = [];

    let match;
    while ((match = propRegex.exec(raw)) !== null) {
        const [, , name, typeRaw] = match;

        const isOptional =
            typeRaw.includes('null') ||
            name.toLowerCase().includes('created') ||
            name.toLowerCase().includes('updated');

        const typeClean = typeRaw.replace(/\s*\|\s*null/g, '').trim();
        const type = typeClean.includes('Date') ? 'Date' : typeClean;

        properties.push({ name, type, optional: isOptional });
    }

    const dtoContent = await ejs.renderFile(path.join(TEMPLATES_PATH, 'dto.ejs'), {
        className,
        properties,
    });

    const fileName = `${moduleName.replace(/[-\s]/g, '_')}.dto.ts`;
    fs.writeFileSync(path.join(dtoFolder, fileName), dtoContent);
    console.log(`📦 DTO generated: ${fileName}`);
}

async function main() {
    const args = process.argv.slice(2);
    const fromTable = args.find(a => a.startsWith('--fromTable='))?.split('=')[1];
    const moduleName = args.find(a => a.startsWith('--nama='))?.split('=')[1];
    const routerGroup = args.find(a => a.startsWith('--router='))?.split('=')[1] ?? 'auth';
    const mode = args.find(a => a.startsWith('--mode='))?.split('=')[1] ?? 'default';
    const dbName = args.find(a => a.startsWith('--db='))?.split('=')[1];

    if (!fromTable || !moduleName || !dbName) {
        console.log('❌ Gunakan: --fromTable=nama_tabel --nama=nama_module [--db=nama_database] [--router=auth|nonauth] [--mode=default|expert]');
        process.exit(1);
    }

    const className = pascalCase(moduleName);
    const folderPath = path.join(MODULES_PATH, moduleName);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

    await generateEntityFromTable(fromTable, className, moduleName, dbName);
 
    const fileMap = [
        { name: 'service', file: `${moduleName}.service.ts`, tpl: 'service.ejs' },
        {
            name: 'controller',
            file: `${moduleName}.controller.ts`,
            tpl:
                mode === 'readonly'
                    ? 'controller.readonly.ejs'
                    : `controller.${mode}.ejs`,
        },
        { name: 'module', file: `${moduleName}.module.ts`, tpl: 'module.ejs' },
        { name: 'controller spec', file: `${moduleName}.controller.spec.ts`, tpl: 'controller.spec.ejs' },
        { name: 'service spec', file: `${moduleName}.service.spec.ts`, tpl: 'service.spec.ejs' },
    ];

    for (const item of fileMap) {
        const outPath = path.join(folderPath, item.file);
        const tplPath = path.join(TEMPLATES_PATH, item.tpl);

        const content = await ejs.renderFile(tplPath, {
            moduleName,
            className,
            kebabName: kebabCase(moduleName),
        });

        fs.writeFileSync(outPath, content);
        console.log(`✅ ${item.name} generated at ${outPath}`);
    }

    // Update router.config.ts
    // Update router.config.ts
    // ✅ Smart update router.config.ts
    let routerConfigRaw = fs.readFileSync(ROUTER_CONFIG_PATH, 'utf-8');
    const importStatement = `import { ${className}Module } from './modules/${moduleName}/${moduleName}.module';`;
    const routerEntry = `{ path: '${moduleName}', module: ${className}Module }`;

    // ⛔ Insert import if not exist
    if (!routerConfigRaw.includes(importStatement)) {
        routerConfigRaw = `${importStatement}\n${routerConfigRaw}`;
    }

    // 🔍 Replace router group with additional entry
    const routerGroupRegex = new RegExp(`(path:\\s*'${routerGroup}'\\s*,\\s*children:\\s*\\[)([^\\]]*)\\]`, 'm');
    if (!routerConfigRaw.includes(routerEntry)) {
        routerConfigRaw = routerConfigRaw.replace(
            routerGroupRegex,
            (_, start, children) => {
                const newChildren = children.includes(routerEntry)
                    ? children // skip if already exists
                    : `${children.trimEnd()},\n      ${routerEntry}`;
                return `${start}${newChildren}]`;
            }
        );

        fs.writeFileSync(ROUTER_CONFIG_PATH, routerConfigRaw);
        console.log(`🔗 Router entry added to group '${routerGroup}'`);
    }

    // ✅ Smart update app.module.ts
    const appModuleRaw = fs.readFileSync(APP_MODULE_PATH, 'utf-8');
    const appImport = `import { ${className}Module } from './modules/${moduleName}/${moduleName}.module';`;
    const appModuleRegex = /@Module\(\{\s+imports: \[(.*?)\]/s;
    if (!appModuleRaw.includes(appImport)) {
        const updatedAppModule = appModuleRaw
            .replace(/(import[^;]+;)(?!.*import)/s, `$1\n${appImport}`)
            .replace(appModuleRegex, (_, imports) => {
                return `@Module({\n  imports: [${imports.trim()}, ${className}Module]`;
            });

        fs.writeFileSync(APP_MODULE_PATH, updatedAppModule);
        console.log('📦 app.module.ts updated with new module');
    }

    // path untuk file database.providers.ts
    const DATABASE_PROVIDER_PATH = path.resolve(__dirname, '../src/config/database.config.ts');

    injectEntityToDatabaseProviders(className, moduleName);

    // inject entity ke dalam database.providers.ts
    function injectEntityToDatabaseProviders(className: string, moduleName: string) {
        const dbFile = fs.readFileSync(DATABASE_PROVIDER_PATH, 'utf-8');

        const importLine = `import { ${className} } from '../modules/${moduleName}/entities/${moduleName}.entity';`;
        const insertToEntt = `${className},`;

        if (!dbFile.includes(importLine)) {
            const updated = dbFile
                .replace(
                    /(import\s+\{.*?\}\s+from\s+['"].*?['"];[\r\n]+)/,
                    `$1${importLine}\n`
                )
                .replace(
                    /(const\s+entt\s*=\s*\[)([\s\S]*?)(\];)/m,
                    (_, start, middle, end) => {
                        if (middle.includes(insertToEntt)) return `${start}${middle}${end}`;
                        return `${start}${middle.trimEnd()},\n    ${insertToEntt}${end}`;
                    }
                );

            fs.writeFileSync(DATABASE_PROVIDER_PATH, updated);
            console.log(`📦 Entity '${className}' injected to database.providers.ts`);
        }
    }




}

main().catch((err) => console.error('❌ Generator failed:', err));