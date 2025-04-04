import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import { pascalCase } from 'change-case';
import * as minimist from 'minimist'; 

const args = minimist(process.argv.slice(2));
const nama = args.nama;

if (!nama) {
    console.error('❌ Parameter --nama harus diisi (contoh: --nama=invoice_summary)');
    process.exit(1);
}

const moduleName = nama;
const tableName = nama;
const className = pascalCase(moduleName);
const serviceClassName = `${className}WidgetService`;
const controllerClassName = `${className}WidgetController`;

const rootPath = path.resolve('src/modules', moduleName);
const controllerTarget = path.join(rootPath, `${moduleName}_widget.controller.ts`);
const serviceTarget = path.join(rootPath, `${moduleName}_widget.service.ts`);
const specTarget = path.join(rootPath, `${moduleName}_widget.service.spec.ts`);
const moduleTarget = path.join(rootPath, `${moduleName}.module.ts`);
const dtoTarget = path.join(rootPath, `dto`, `${moduleName}_widget_report.dto.ts`);

const rootPathTemplate = path.resolve(__dirname);
const controllerTemplate = path.join(rootPathTemplate, 'templates', 'report_widget_controller.ejs');
const serviceTemplate = path.join(rootPathTemplate, 'templates', 'report_widget_service.ejs'); 
const specTemplate = path.join(rootPathTemplate, 'templates', 'report_widget_service.spec.ejs');
const dtoTemplate = path.join(rootPathTemplate, 'templates', 'report_widget_dto.ejs');

// Utility: write file from template
async function writeFromTemplate(templatePath: string, outputPath: string, data: any) {
    const rendered = await ejs.renderFile(templatePath, data) as string;
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, rendered);
    console.log('✅ Created:', outputPath);
}

// Utility: inject into module file
function injectToModule() {
    if (!fs.existsSync(moduleTarget)) {
        console.warn('⚠️ Module file tidak ditemukan:', moduleTarget);
        return;
    }

    let content = fs.readFileSync(moduleTarget, 'utf-8');

    const importService = `import { ${serviceClassName} } from './${moduleName}_widget.service';`;
    const importController = `import { ${controllerClassName} } from './${moduleName}_widget.controller';`;

    if (!content.includes(importService)) {
        content = importService + '\n' + content;
    }

    if (!content.includes(importController)) {
        content = importController + '\n' + content;
    }

    // Add to providers
    content = content.replace(
        /providers:\s*\[([^\]]*)\]/,
        (match, inner) => `providers: [${inner.trim()}${inner.trim() ? ', ' : ''}${serviceClassName}]`
    );

    // Add to controllers
    content = content.replace(
        /controllers:\s*\[([^\]]*)\]/,
        (match, inner) => `controllers: [${inner.trim()}${inner.trim() ? ', ' : ''}${controllerClassName}]`
    );

    fs.writeFileSync(moduleTarget, content);
    console.log('✅ Injected to module:', moduleTarget);
}
 

(async () => {
    await writeFromTemplate(controllerTemplate, controllerTarget, { className, moduleName, tableName });
    await writeFromTemplate(serviceTemplate, serviceTarget, { className, moduleName, tableName });
    await writeFromTemplate(specTemplate, specTarget, { className, moduleName });
    await writeFromTemplate(dtoTemplate, dtoTarget, { className, moduleName });
    // await injectToRouterConfig();
    injectToModule();
})();
