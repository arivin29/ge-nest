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
    .option('router', { type: 'string', choices: ['auth', 'nonauth'], default: 'auth' })
    .argv as any;

const moduleName = args.nama;
const tableName = args.fromTable;
const className = pascalCase(moduleName);
const controllerName = `${moduleName}_report.controller.ts`;
 
const moduleDir = path.resolve('src/modules', moduleName); 
const dtoPath = path.join(moduleDir, 'dto', `${moduleName}.dto.ts`);
const entityPath = path.join(moduleDir, 'entities', `${moduleName}.entity.ts`);
const servicePath = path.join(moduleDir, `${moduleName}.service.ts`);
const controllerPath = path.join(moduleDir, controllerName);

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
    });

    fs.writeFileSync(controllerPath, output);
    console.log(`✅ Generated ${controllerName}`);
}

// === Step 2: Inject findAllCustom() to service.ts ===
function injectFindAllCustomToService() {
    let serviceContent = fs.readFileSync(servicePath, 'utf-8');

    // 🧹 Hapus method lama kalau ada
    const methodRegex = /async\s+findAllCustom\s*\([\s\S]*?\n\}/gm;
    if (methodRegex.test(serviceContent)) {
        serviceContent = serviceContent.replace(methodRegex, '');
        console.log(`🧹 Removed existing findAllCustom() method`);
    }

    // 🔍 Auto generate joinMap
    const joins = parseEntityJoins();
    const joinMap = joins
        .map((j) => `    ${j}: { field: 'e.${j}', alias: '${j}' },`)
        .join('\n');

    // 🧩 Generate method code
    const templatePath = path.join(__dirname, 'templates', 'service_findAllCustom.ejs');
    const methodCode = ejs.render(fs.readFileSync(templatePath, 'utf8'), { joinMap });

    // ✅ Inject import if needed
    const importStatement = `import { applyDynamicJoin } from 'src/common/helpers/query-builder.helper';`;
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



// === Run ===
if (!fs.existsSync(moduleDir)) {
    console.error(`lokasi ${moduleDir} tidak ditemukan`);
    console.error(`❌ Modul ${moduleName} tidak ditemukan`);
    process.exit(1);
}

generateReportController();
injectFindAllCustomToService();
