// tools/crud-generator.ts
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import inquirer from 'inquirer';
import { execSync } from 'child_process';
import { pascalCase, kebabCase } from 'change-case';
import 'dotenv/config';

// const MODULES_PATH = path.resolve(__dirname, '../src/modules');
const TEMPLATES_PATH = path.resolve(__dirname, './templates');
const APP_MODULE_PATH = path.resolve(__dirname, '../src/app.module.ts');
const ROUTER_CONFIG_PATH = path.resolve(__dirname, '../src/router.config.ts');

const TEMP_ENTITY_OUTPUT = path.resolve(__dirname, './__generated__/entities');

 
 

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
    const schemaAlias = dbName.replace(/^erp_/, '');
    const className = pascalCase(moduleName);
    const folderPath = path.join(path.resolve(__dirname, `../src/modules/${schemaAlias}`), moduleName);
    // const folderPath = path.join(MODULES_PATH, moduleName);
    if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath);

 
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

    
    const schemaPascal = pascalCase(schemaAlias);
    const dtoImport = `${schemaPascal}${className}Dto`;
    const entiryImport = `${schemaPascal}${className}`;
    const dtoPath = `src/dto/${schemaAlias}/${schemaAlias}.${moduleName}.dto`;
    const entityPath = `src/entities/${schemaAlias}`;

    for (const item of fileMap) {
        const outPath = path.join(folderPath, item.file);
        const tplPath = path.join(TEMPLATES_PATH, item.tpl);

        const content = await ejs.renderFile(tplPath, {
            moduleName,
            className,
            kebabName: kebabCase(moduleName),
            dtoImport,
            schemaAlias,
            entiryImport,
            dtoPath,
            entityPath,
        });

        fs.writeFileSync(outPath, content);
        console.log(`✅ ${item.name} generated at ${outPath}`);
    }

    // Update router.config.ts
    // Update router.config.ts
    // ✅ Smart update router.config.ts
    let routerConfigRaw = fs.readFileSync(ROUTER_CONFIG_PATH, 'utf-8');
    const importStatement = `import { ${className}Module } from './modules/${schemaAlias}/${moduleName}/${moduleName}.module';`;
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

    // ✅ Smart update app.module.ts ke dalam COM[]
    const APP_MODULE_PATH = path.join(__dirname, '../src/app.module.ts');
    const appModuleRaw = fs.readFileSync(APP_MODULE_PATH, 'utf-8');

    const appImport = `import { ${className}Module } from './modules/${schemaAlias}/${moduleName}/${moduleName}.module';`;
    const importRegex = /^(import .+;\s*)+/m;

    let updatedAppModule = appModuleRaw;

    // ✅ 1. Inject import statement
    if (!appModuleRaw.includes(appImport)) {
        const importSection = appModuleRaw.match(importRegex)?.[0] ?? '';
        updatedAppModule = updatedAppModule.replace(importSection, `${importSection}${appImport}\n`);
    }

    // ✅ 2. Inject ke dalam COM = [ ... ];
    const comArrayRegex = /const\s+COM\s*=\s*\[(.*?)\];/s;

    const matchCom = updatedAppModule.match(comArrayRegex);
    if (matchCom) {
        const original = matchCom[0];
        const innerContent = matchCom[1].trim();

        const entries = innerContent ? innerContent.split(',').map(e => e.trim()).filter(Boolean) : [];
        if (!entries.includes(`${className}Module`)) {
            entries.push(`${className}Module`);
            const newCom = `const COM = [\n  ${entries.join(',\n  ')}\n];`;
            updatedAppModule = updatedAppModule.replace(comArrayRegex, newCom);
        }
    }

    // Simpan hasilnya
    fs.writeFileSync(APP_MODULE_PATH, updatedAppModule, 'utf-8');
    console.log(`✅ ${className}Module ditambahkan ke COM dan import`);


    // fs.writeFileSync(APP_MODULE_PATH, updatedAppModule);
    // console.log('📦 app.module.ts updated with new module');

      
  
}

main().catch((err) => console.error('❌ Generator failed:', err));