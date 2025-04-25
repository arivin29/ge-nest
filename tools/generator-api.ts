// tools/crud-generator.ts
import * as fs from 'fs';
import * as path from 'path';
import * as ejs from 'ejs';
import inquirer from 'inquirer';
import { execSync } from 'child_process';
import { pascalCase, kebabCase } from 'change-case';

/**
 * Parse CLI args secara manual: --key=value
 */
function parseArgs(argv: string[]) {
    const args: Record<string, string> = {};
    argv.forEach(arg => {
        if (arg.startsWith('--')) {
            const [key, value] = arg.replace(/^--/, '').split('=');
            args[key] = value;
        }
    });
    return args;
}

const args = parseArgs(process.argv.slice(2));

const fromTable = args.fromTable;
const nama = args.nama;
const db = args.db;
const router = args.router || 'auth';
const outRaw = args.out || 'crud';
const out = outRaw.split(',').map((x: string) => x.trim());

// inject widget if report exists
const needCrud = out.includes('crud');
const needReport = out.includes('report');
const needWidget = needReport; // auto

try {
    if (needCrud) {
        console.log('▶️ Generating CRUD...');
        execSync(`npm run crud -- --fromTable=${fromTable} --nama=${nama} --db=${db} --router=${router} --mode=expert`, { stdio: 'inherit' });
    }

    if (needReport) {
        console.log('📊 Generating Report...');
        execSync(`npm run crud-report -- --fromTable=${fromTable} --nama=${nama} --db=${db} --router=${router}`, { stdio: 'inherit' });
    }

    if (needWidget) {
        console.log('📦 Generating Widget...');
        execSync(`npm run crud-report-widget -- --fromTable=${fromTable} --nama=${nama} --db=${db} --router=${router}`, { stdio: 'inherit' });
    }

    console.log('✅ Selesai generate API 🚀');
} catch (err) {
    console.error('❌ Gagal generate:', err);
}
