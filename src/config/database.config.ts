// src/database/database.providers.ts
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { ConfigModule, ConfigService } from '@nestjs/config'; 
import { Client } from 'src/modules/client/entities/client.entity';
import { ClientSite } from 'src/modules/client_site/entities/client_site.entity';
import { CompanyConfig } from 'src/modules/company_config/entities/company_config.entity';
import { ContactClientUse } from 'src/modules/contact_client_use/entities/contact_client_use.entity';
import { Contract } from 'src/modules/contract/entities/contract.entity';
import { ContractSiteService } from 'src/modules/contract_site/contract_site.service';
import { ContractSite } from 'src/modules/contract_site/entities/contract_site.entity';
import { CustomField } from 'src/modules/custom_field/entities/custom_field.entity';
import { CustomFieldValue } from 'src/modules/custom_field_value/entities/custom_field_value.entity';
import { Faktur } from 'src/modules/faktur/entities/faktur.entity';
import { Invoice } from 'src/modules/invoice/entities/invoice.entity';
import { Kantor } from 'src/modules/kantor/entities/kantor.entity';
import { WorkSchedule } from 'src/modules/work_schedule/entities/work_schedule.entity';
import { WorkScheduleTeknisi } from 'tools/__generated__/entities/WorkScheduleTeknisi';

const entt = [
    Client,
    ClientSite,
    CompanyConfig,
    ContactClientUse,
    Contract,
    ContractSite,
    ContractSiteService,
    CustomField,
    CustomFieldValue,
    Faktur,
    Invoice,
    Kantor,
    WorkSchedule,
    WorkScheduleTeknisi];

export const CentralDatabaseModule = TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: +config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: entt,
        synchronize: false, // matikan di production
    }),
});