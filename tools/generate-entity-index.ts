import * as fs from 'fs';
import * as path from 'path';
import { pascalCase } from 'change-case';

const baseDir = path.resolve(__dirname, '../src/entities');

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
        const fileBase = file.replace('.ts', ''); // ex: pelanggan.contact_client_use.entity
        const parts = fileBase.split('.');

        const entityNameBase = fileBase.replace('.entity', ''); // tanpa .entity
        const className = pascalCase(entityNameBase); // PelangganContactClientUseEntity

        const relativePath =  `./${fileBase}`;

        importLines.push(`import { ${className} } from '${relativePath}';`);
        exportLines.push(`export * from '${relativePath}';`);
        entityNames.push(className);
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
}

function main() {
    const schemas = fs
        .readdirSync(baseDir)
        .filter(f => fs.statSync(path.join(baseDir, f)).isDirectory());

    for (const schema of schemas) {
        generateIndexForSchema(schema);
    }
}

main();
