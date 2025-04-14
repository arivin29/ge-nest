import * as fs from 'fs';
import * as path from 'path';
import { pascalCase } from 'change-case';

const baseDir = path.resolve(__dirname, '../src/entities');
const dbMapPath = path.resolve(__dirname, '../src/config/entity-database-map.ts');
const dataSourceMapPath = path.resolve(__dirname, '../src/config/data-source-map.ts');
const entityDbMap: Record<string, { db: string; aliases: string[] }> = {};
const dataSourceImports: string[] = [];
const dataSourceEntries: string[] = [];

function generateIndexForSchema(schemaName: string) {
    const folderPath = path.join(baseDir, schemaName);
    const indexPath = path.join(folderPath, 'index.ts');

    // 1. Hapus index.ts lama
    if (fs.existsSync(indexPath)) {
        fs.unlinkSync(indexPath);
        console.log(`🗑️  Deleted old index.ts in ${schemaName}`);
    }

    // 2. Ambil semua file entity
    const files = fs.readdirSync(folderPath).filter(f => f.endsWith('.entity.ts'));

    const importLines: string[] = [];
    const exportLines: string[] = [];
    const entityNames: string[] = [];

    for (const file of files) {
        const fileBase = file.replace('.ts', '');
        const entityNameBase = fileBase.replace('.entity', '');
        const className = pascalCase(entityNameBase);
        const relativePath = `./${fileBase}`;

        importLines.push(`import { ${className} } from '${relativePath}';`);
        exportLines.push(`export * from '${relativePath}';`);
        entityNames.push(className);

        entityDbMap[className] = {
            db: schemaName,
            aliases: [
                fileBase.split('.')[1] // gunakan bagian pertama nama file sebagai alias
            ],
        };
    }

    const entityArrayName = pascalCase(schemaName) + 'Entities';

    const finalContent = `${importLines.join('\n')}

export const ${entityArrayName} = [
  ${entityNames.join(',\n  ')}
];

${exportLines.join('\n')}
`;

    fs.writeFileSync(indexPath, finalContent);
    console.log(`✅ Generated index.ts for ${schemaName}`);

    // Tambah import data source
    const moduleName = `Database${pascalCase(schemaName)}Module`;
    dataSourceImports.push(`import { ${moduleName} } from './database.${schemaName}.providers';`);
    dataSourceEntries.push(`  ${schemaName}: ${moduleName},`);

    // Generate database.<schema>.providers.ts
    const providerFile = `database.${schemaName}.providers.ts`;
    const providerPath = path.resolve(__dirname, `../src/config/${providerFile}`);
    const entityImportName = `${pascalCase(schemaName)}Entities`;
    const providerModuleName = moduleName;

    const providerContent = `import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ${entityImportName} } from '../entities/${schemaName}';

export const ${providerModuleName} = TypeOrmModule.forRootAsync({
  name: '${schemaName}',
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DB_HOST'),
    port: +config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    database: 'erp_${schemaName}',
    entities: ${entityImportName},
    synchronize: false,
  }),
});
`;

    fs.writeFileSync(providerPath, providerContent);
    console.log(`🔌 Generated database provider: ${providerFile}`);
}

function writeEntityDbMap() {
    const content = `// AUTO GENERATED FILE
export const EntityDatabaseMap: Record<string, { db: string; aliases: string[] }> = ${JSON.stringify(entityDbMap, null, 2)};
`;
    fs.writeFileSync(dbMapPath, content);
    console.log('✅ entity-database-map.ts generated.');
}

function writeDataSourceMap() {
    const content = `// AUTO GENERATED FILE
${dataSourceImports.join('\n')}

export const dataSourceMap = {
${dataSourceEntries.join('\n')}
};
`;
    fs.writeFileSync(dataSourceMapPath, content);
    console.log('✅ data-source-map.ts generated.');
}

function main() {
    const schemas = fs
        .readdirSync(baseDir)
        .filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

    for (const schema of schemas) {
        generateIndexForSchema(schema);
    }

    writeEntityDbMap();
    writeDataSourceMap();
}

main();
