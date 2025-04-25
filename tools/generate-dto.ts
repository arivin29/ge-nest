// ✅ Refactored generate-dto.ts — Clean, consistent naming

import 'dotenv/config';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as mysql from 'mysql2/promise';
import * as minimist from 'minimist';
import { capitalCase } from 'change-case';

const args = minimist(process.argv.slice(2));
const schemas = (args.db || '').split(',').filter(Boolean);
const withEntity = !!args['with-entity'];
const allTables = !!args['all-tables'];

const excludeSchemas = ['erp_sensor', 'erp_sensor_analisa', 'erp_user'];

const outputDtoBase = path.resolve(__dirname, '../src/dto');
const outputEntityBase = path.resolve(__dirname, '../src/entities');
const configBase = path.resolve(__dirname, '../src/config');

function snakeToCamel(str: string) {
    return str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());
}
function snakeToPascal(str: string) {
    const camel = snakeToCamel(str);
    return camel.charAt(0).toUpperCase() + camel.slice(1);
}
function mapMysqlToTs(mysqlType: string): string {
    switch (mysqlType) {
        case 'varchar':
        case 'text':
        case 'char':
        case 'datetime':
        case 'date':
        case 'timestamp':
        case 'time':
        case 'enum':
        case 'set':
            return 'string';

        case 'int':
        case 'smallint':
        case 'mediumint':
        case 'decimal':
        case 'float':
        case 'double':
        case 'bigint':
            return 'number';

        case 'tinyint':
            return 'boolean';

        case 'json':
            return 'string'; // or object if you parse manually

        case 'blob':
        case 'binary':
        case 'varbinary':
            return 'Buffer';

        default:
            console.warn(`⚠️ Unrecognized MySQL type: "${mysqlType}", fallback to 'any'`);
            return 'string';
    }
}

function pascalToSnake(str: string) {
    return str.replace(/[A-Z]/g, (letter, index) =>
        (index ? '_' : '') + letter.toLowerCase()
    );
}


(async () => {
    const conn = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: +(process.env.DB_PORT || 3306),
    });

    const [dbs] = await conn.query(`SHOW DATABASES`);
    const excludeSchemas = ['erp_sensor', 'erp_sensor_analisa', 'erp_user','erp_amims'];

    const dbList = (dbs as any[])
        .map((d) => d.Database)
        .filter((d) => d.startsWith('erp_') && !excludeSchemas.includes(d));
 

    // DTO umum 
    for (const schema of dbList) { 
        const schemaAlias = schema.replace(/^erp_/, '');
        const schemaPascal = snakeToPascal(schemaAlias);
        const dtoDir = path.join(outputDtoBase, schemaAlias);
        const entityDir = path.join(outputEntityBase, schemaAlias);
        await fs.ensureDir(dtoDir);
        await fs.ensureDir(entityDir);

        const [tables] = await conn.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = ?`, [schema]);
        const tableNames = (tables as any[]).map(t => t.TABLE_NAME);

        for (const table of tableNames) {
            const [cols] = await conn.query(`SELECT * FROM information_schema.columns WHERE table_schema = ? AND table_name = ?`, [schema, table]);

            const tablePascal = snakeToPascal(table);
            const dtoClassName = `${schemaPascal}${tablePascal}Dto`;
            const entityClassName = `${schemaPascal}${tablePascal}`; 

            const dtoFilename = `${schemaAlias}.${table}.dto.ts`;
            const reportFilename = `${schemaAlias}.${table}-report.dto.ts`;
            const widgetFilename = `${schemaAlias}.${table}-widget.dto.ts`;
            const entityFilename = `${schemaAlias}.${table}.entity.ts`;

            const fields = (cols as any[]).map(col => ({
                name: snakeToCamel(col.COLUMN_NAME),
                dbName: col.COLUMN_NAME,
                type: mapMysqlToTs(col.DATA_TYPE),
                isNullable: col.IS_NULLABLE === 'YES',
                isPrimary: col.COLUMN_KEY === 'PRI',
                isDefaultCurrent: (col.COLUMN_DEFAULT?.toUpperCase?.() === 'CURRENT_TIMESTAMP')
            }));

            const dtoContent = `import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ${dtoClassName} {
${fields.map(f => `  @ApiProperty({ required: ${!f.isNullable} })\n  ${f.name}: ${f.type};`).join('\n\n')}
}
`;
            await fs.writeFile(path.join(dtoDir, dtoFilename), dtoContent);

            if (withEntity) {
                const entityContent = `import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: '${table}', schema: '${schema}' })
export class ${entityClassName} {
${fields.map(f => {
                    const col = f.isPrimary ? '@PrimaryColumn' : '@Column';
                    const options = [`name: '${f.dbName}'`];
                    if (!f.isPrimary && f.isNullable) options.push('nullable: true');
                    if (f.isDefaultCurrent) options.push(`default: () => 'CURRENT_TIMESTAMP'`);

                    return `  ${col}({ ${options.join(', ')} })\n  ${f.name}: ${f.type}${f.isNullable ? '' : ''};`;
                }).join('\n\n')}
}
`;
                await fs.writeFile(path.join(entityDir, entityFilename), entityContent);
            }
 
        }
    }

    // DTO report dan widget 

    const tableToSchemaMap: Record<string, string> = {};

    for (const dbName of dbList) {
        const [tbs] = await conn.query(
            `SELECT table_name FROM information_schema.tables WHERE table_schema = ?`,
            [dbName]
        );
        for (const row of tbs as any[]) {
            const tname = row.TABLE_NAME;
            if (!tableToSchemaMap[tname]) {
                tableToSchemaMap[tname] = dbName;
            }
        }
    }

    for (const schema of dbList) { 
        const schemaAlias = schema.replace(/^erp_/, '');
        const schemaPascal = snakeToPascal(schemaAlias);
        const dtoDir = path.join(outputDtoBase, schemaAlias);
        const entityDir = path.join(outputEntityBase, schemaAlias);
        await fs.ensureDir(dtoDir);
        await fs.ensureDir(entityDir);

        const [tables] = await conn.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = ?`, [schema]);
        const tableNames = (tables as any[]).map(t => t.TABLE_NAME);

        for (const table of tableNames) {
            const [cols] = await conn.query(`SELECT * FROM information_schema.columns WHERE table_schema = ? AND table_name = ?`, [schema, table]);

            const tablePascal = snakeToPascal(table);
            const dtoClassName = `${schemaPascal}${tablePascal}Dto`;
            const entityClassName = tablePascal;

            const dtoFilename = `${schemaAlias}.${table}.dto.ts`;
            const reportFilename = `${schemaAlias}.${table}-report.dto.ts`;
            const widgetFilename = `${schemaAlias}.${table}-widget.dto.ts`;
            const entityFilename = `${table}.entity.ts`;

            const fields = (cols as any[]).map(col => ({
                name: snakeToCamel(col.COLUMN_NAME),
                dbName: col.COLUMN_NAME,
                type: mapMysqlToTs(col.DATA_TYPE),
                isNullable: col.IS_NULLABLE === 'YES',
                isPrimary: (col.COLUMN_KEY === 'PRI' || col.COLUMN_NAME == `id_${table}`),
            }));
 

            const primaryKeys = fields.filter(f => f.isPrimary).map(f => f.name);
            const idRelasi = fields.filter(f =>
                /^id[A-Z]/.test(f.name) &&
                !primaryKeys.includes(f.name) // ✅ exclude PK
            );
            const reportClassName = `${schemaPascal}${tablePascal}ReportDto`;
            const reportImports = idRelasi
                .map(f => {
                    const relasi = f.name.replace(/^id/, '');
                    const pascalRelasi = snakeToPascal(relasi);
                    const snakeRelasi = pascalToSnake(pascalRelasi);

                    const targetTable = relasi.toLowerCase(); // ex: teknisi
                    const targetSchema = tableToSchemaMap[targetTable] || schema;
                    const targetAlias = targetSchema.replace(/^erp_/, '');
                    const targetPascal = snakeToPascal(targetAlias);

                    return {
                        name: `${targetPascal}${pascalRelasi}Dto`,
                        path: targetAlias === schemaAlias
                            ? `./${targetAlias}.${snakeRelasi}.dto`
                            : `../${targetAlias}/${targetAlias}.${snakeRelasi}.dto`,
                        prop: relasi.charAt(0).toLowerCase() + relasi.slice(1),
                        tableName: targetTable
                    };
                })
                .filter(rel => tableNames.includes(rel.tableName));


            const reportContent = `import { ApiProperty } from '@nestjs/swagger';
import { ${dtoClassName} } from './${schemaAlias}.${table}.dto';
${reportImports.map(i => `import { ${i.name} } from '${i.path}';`).join('\n')}

export class ${reportClassName} extends ${dtoClassName} {
${reportImports.map(i => `  @ApiProperty({ type: ${i.name} })\n  ${i.prop}: ${i.name};`).join('\n\n')}
}
`;
            await fs.writeFile(path.join(dtoDir, reportFilename), reportContent);

            const widgetClassName = `${schemaPascal}${tablePascal}WidgetDto`;
            const widgetContent = `import { ApiProperty } from '@nestjs/swagger';
import { ${dtoClassName} } from './${schemaAlias}.${table}.dto';

export class ${widgetClassName} extends ${dtoClassName} {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
`;
            await fs.writeFile(path.join(dtoDir, widgetFilename), widgetContent);
        }


//         // === ✅ Generate database.<schema>.providers.ts ===
//         const providerFile = `database.${schemaAlias}.providers.ts`;
//         const providerPath = path.resolve(__dirname, `../src/config/${providerFile}`);
//         const entityImportName = `${schemaPascal}Entities`;
//         const providerModuleName = `Database${schemaPascal}Module`;

//         const providerContent = `import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { ${entityImportName} } from '../entities/${schemaAlias}';

// export const ${providerModuleName} = TypeOrmModule.forRootAsync({
//   name: '${schemaAlias}', // ✅ multi-db name
//   imports: [ConfigModule],
//   inject: [ConfigService],
//   useFactory: (config: ConfigService) => ({
//     type: 'mysql',
//     host: config.get('DB_HOST'),
//     port: +config.get('DB_PORT'),
//     username: config.get('DB_USERNAME'),
//     password: config.get('DB_PASSWORD'),
//     database: 'erp_${schemaAlias}',
//     entities: ${entityImportName},
//     synchronize: false,
//   }),
// });
// `;

        // Tambahkan import ini di atas


        

    }

    // Tambahkan setelah semua DTO dan entity selesai dibuat
    console.log('🔄 Syncing erp_acl.module...');

    const moduleInserts: any[] = [];

    for (const schema of dbList) {
        const schemaAlias = schema.replace(/^erp_/, '');
        const [tables] = await conn.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = ?`, [schema]);

        for (const tableRow of tables as any[]) {
            const tableName = tableRow.TABLE_NAME;
            const tablePascal = snakeToPascal(tableName);
            const entityName = `${snakeToPascal(schemaAlias)}${tablePascal}`;

            moduleInserts.push({
                id_module: entityName,
                kode_module: entityName,
                nama_module: (tablePascal), // ClientUser → "Client User"
                nama_tabel: tableName,
                nama_db: schema,
                deskripsi: null,
                is_aktif: 1,
                urutan: 0
            });
        }
    }

    // Hapus isi lama (optional)
    await conn.query(`DELETE FROM erp_acl.module`);

    // Insert ulang
    for (const mod of moduleInserts) {
        await conn.query(`
        INSERT INTO erp_acl.module (
            id_module, kode_module, nama_module,
            nama_tabel, nama_db, deskripsi, is_aktif, urutan
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                mod.id_module,
                mod.kode_module,
                mod.nama_module,
                mod.nama_tabel,
                mod.nama_db,
                mod.deskripsi,
                mod.is_aktif,
                mod.urutan
            ]
        );
    }

    console.log(`✅ Inserted ${moduleInserts.length} rows into erp_acl.module`);
    

    conn.end();
})();
