import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import * as yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { pascalCase } from 'change-case-all';

// === CLI Arguments ===
const args = yargs(hideBin(process.argv))
    .option('fromTable', { type: 'string', demandOption: true })
    .option('nama', { type: 'string', demandOption: true })
    .option('db', { type: 'string', demandOption: true })
    .option('router', { type: 'string', choices: ['auth', 'nonauth'], default: 'auth' })
    .argv as any;

const routerGroup = args.router;

const moduleName = args.nama;
const tableName = args.fromTable;
const className = pascalCase(moduleName);
const controllerName = `${moduleName}_report.controller.ts`;
const dbName = args.db;

const schemaAlias = dbName.replace(/^erp_/, '');
const schemaPascal = pascalCase(schemaAlias);

const moduleDir = path.resolve('src/modules', moduleName);
const entityPath = path.join('src/entities', schemaAlias, `${schemaAlias}.${moduleName}.entity.ts`);
console.log(entityPath)
const servicePath = path.join(moduleDir, `${moduleName}.service.ts`);
const controllerPath = path.join(moduleDir, controllerName);
const dtoImport = `${schemaPascal}${className}Dto`;
const dtoImport_report = `${schemaPascal}${className}ReportDto`;
const entiryImport = `${schemaPascal}${className}`;
const dtoPath = `src/dto/${schemaAlias}/${schemaAlias}.${moduleName}.dto`;
const dtoPath_report = `src/dto/${schemaAlias}/${schemaAlias}.${moduleName}-report.dto`;

// === Utility: Get Join Map from Entity File ===
function parseEntityJoins(): string[] {
    const content = fs.readFileSync(entityPath, 'utf-8');
    const regex = /id_([a-zA-Z0-9_]+)/g;
    const matches = [...content.matchAll(regex)]
        .map((m) => m[1])
        .filter((field) => field !== moduleName); // exclude PK
    return [...new Set(matches)];
}

// === Step 1: Generate report.controller.ts ===
function generateReportController() {
    if (fs.existsSync(controllerPath)) {
        console.log(`🔁 ${controllerName} sudah ada. Akan ditimpa ulang.`);
    } else {
        console.log(`✅ Membuat baru: ${controllerName}`);
    }
 
    
    const entityPath = `src/entities/${schemaAlias}`;

    const dtoName = `${className}Dto`;
    const serviceName = `${className}Service`;
    const joins = parseEntityJoins();

    const templatePath = path.join(__dirname, 'templates', 'report_controller.ejs');
    const output = ejs.render(fs.readFileSync(templatePath, 'utf8'), {
        moduleName,
        className,
        dtoName,
        serviceName,
        joins,
        schemaPascal,
        dtoImport,
        dtoPath,
        dtoImport_report,
        dtoPath_report,
        entityPath,
        entiryImport,
    });

    fs.writeFileSync(controllerPath, output);
    console.log(`✅ Generated ${controllerName}`);
}

// === Step 2: Inject findAllCustom() to service.ts ===
function injectFindAllCustomToService() {
    let serviceContent = fs.readFileSync(servicePath, 'utf-8');
    // 🛡️ Cegah duplikasi jika method sudah ada
    if (serviceContent.includes('async findAllSmart')) {
        console.log('⚠️ findAllSmart() already exists, skipping inject');
        return;
    }
    // 🧹 Hapus method lama kalau ada
    const methodRegex = /async\s+findAllSmart\s*\([\s\S]*?\n\}/gm;
    if (methodRegex.test(serviceContent)) {
        serviceContent = serviceContent.replace(methodRegex, '');
        console.log(`🧹 Removed existing findAllSmart() method`);
    }
  

    // 🔍 Auto generate joinMap
    const joins = parseEntityJoins();
    const joinMap = joins
        .map((j) => `    ${j}: { field: 'e.${j}', alias: '${j}' },`)
        .join('\n');

    // 🧩 Generate method code
    const templatePath = path.join(__dirname, 'templates', 'service_findAllCustom.ejs');
    const methodCode = ejs.render(fs.readFileSync(templatePath, 'utf8'), { joinMap, schemaAlias, className, dtoImport_report, dtoImport });

    // ✅ Inject import if needed
    const importStatement = `
            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { ${dtoImport} } from '${dtoPath}';
            `;
    if (!serviceContent.includes(importStatement)) {
        const lines = serviceContent.split('\n');
        const firstNonImportIndex = lines.findIndex(line => !line.trim().startsWith('import '));
        lines.splice(firstNonImportIndex, 0, importStatement);

        serviceContent = lines.join('\n');
    }

    // 🔧 Inject method before class closing
    const classEndIndex = serviceContent.lastIndexOf('}');
    if (classEndIndex === -1) {
        console.error('❌ Tidak bisa menemukan akhir class untuk inject method');
        return;
    }

    const updated = `${serviceContent.slice(0, classEndIndex)}\n\n${methodCode}\n${serviceContent.slice(classEndIndex)}`;
    fs.writeFileSync(servicePath, updated);

    console.log(`✅ Injected fresh findAllCustom() to ${moduleName}.service.ts`);
}

// === Update router.config.ts ===
// function updateRouterConfig() {
//     const ROUTER_CONFIG_PATH = path.resolve(__dirname, '../src/router.config.ts');
//     let routerConfigRaw = fs.readFileSync(ROUTER_CONFIG_PATH, 'utf-8');
//     const importStatement = `import { ${className}Module } from './modules/${moduleName}/${moduleName}.module';`;
//     const routerEntry = `{ path: '${moduleName}', module: ${className}Module }`;

//     // ⛔ Insert import if not exist
//     if (!routerConfigRaw.includes(importStatement)) {
//         routerConfigRaw = `${importStatement}\n${routerConfigRaw}`;
//     }

//     // 🔍 Replace router group with additional entry
//     const routerGroupRegex = new RegExp(`(path:\\s*'${routerGroup}'\\s*,\\s*children:\\s*\\[)([^\\]]*)\\]`, 'm');
//     if (!routerConfigRaw.includes(routerEntry)) {
//         routerConfigRaw = routerConfigRaw.replace(
//             routerGroupRegex,
//             (_, start, children) => {
//                 const newChildren = children.includes(routerEntry)
//                     ? children // skip if already exists
//                     : `${children.trimEnd()},\n      ${routerEntry}`;
//                 return `${start}${newChildren}]`;
//             }
//         );

//         fs.writeFileSync(ROUTER_CONFIG_PATH, routerConfigRaw);
//         console.log(`🔗 Router entry added to group '${routerGroup}'`);
//     }
// }


function injectReportControllerToModule() {
    const modulePath = path.join(moduleDir, `${moduleName}.module.ts`);
    let content = fs.readFileSync(modulePath, 'utf8');

    const controllerImport = `import { ${className}ReportController } from './${moduleName}_report.controller';`;

    // Inject import jika belum ada
    if (!content.includes(controllerImport)) {
        const lines = content.split('\n');
        const lastImportIndex = lines.map((line, i) => line.startsWith('import') ? i : -1).filter(i => i !== -1).pop() ?? 0;
        lines.splice(lastImportIndex + 1, 0, controllerImport);
        content = lines.join('\n');
    }

    // Inject controller ke dalam array controllers: []
    const controllersRegex = /controllers:\s*\[([^\]]*)\]/;
    if (controllersRegex.test(content)) {
        content = content.replace(controllersRegex, (match, inside) => {
            const controllers = inside.split(',').map(s => s.trim());
            if (!controllers.includes(`${className}ReportController`)) {
                controllers.push(`${className}ReportController`);
            }
            return `controllers: [${controllers.filter(Boolean).join(', ')}]`;
        });
    } else {
        // fallback: belum ada controllers block
        content = content.replace(/@Module\s*\(\{/, `@Module({\n  controllers: [${className}ReportController],`);
    }

    fs.writeFileSync(modulePath, content);
    console.log(`✅ Injected ${className}ReportController to ${moduleName}.module.ts`);
}




// === Run ===
if (!fs.existsSync(moduleDir)) {
    console.error(`lokasi ${moduleDir} tidak ditemukan`);
    console.error(`❌ Modul ${moduleName} tidak ditemukan`);
    process.exit(1);
}


generateReportController();
injectFindAllCustomToService();
// updateRouterConfig(); 
injectReportControllerToModule();


