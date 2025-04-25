import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclModule } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ModuleService extends BaseService<AclModule> {
    constructor(
        @InjectRepository(AclModule, 'acl')
        repo: Repository<AclModule>,
    ) {
        super(repo);
    }

    async findSATU(forModule) { 
        const values = await this.repo.findOne({
            where: {
                idModule: forModule
            }
        }) 
        if (forModule) {
            const { namaDb, namaTabel } = parseModuleInfo(forModule);

            const rows = await this.repo.query(`SHOW COLUMNS FROM \`${namaDb}\`.\`${namaTabel}\``);
            const fields = rows 
                .map((row: any) => ({
                    name: row.Field,
                    type: row.Type,
                    nullable: row.Null === 'YES',
                }));

            if (values) {
                values['fields'] = fields;
            }
        }


        return values;
    }
}

function parseModuleInfo(idModule: string): { namaDb: string; namaTabel: string } {
    const match = idModule.match(/^([A-Z][a-z]+)([A-Z].*)$/);
    if (!match) return { namaDb: '', namaTabel: '' };

    const prefix = match[1];
    const suffix = match[2];

    const namaDb = `erp_${prefix.toLowerCase()}`;
    const namaTabel = suffix.replace(/([A-Z])/g, '_$1').replace(/^_/, '').toLowerCase();

    return { namaDb, namaTabel };
}