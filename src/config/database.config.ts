// src/database/database.providers.ts
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleTeknisi } from '../modules/work_schedule_teknisi/entities/work_schedule_teknisi.entity';
import { WorkSchedule } from '../modules/work_schedule/entities/work_schedule.entity';
import { Service } from '../modules/service/entities/service.entity';
import { Kantor } from '../modules/kantor/entities/kantor.entity';
import { Invoice } from '../modules/invoice/entities/invoice.entity';
import { Faktur } from '../modules/faktur/entities/faktur.entity';
import { CustomFieldValue } from '../modules/custom_field_value/entities/custom_field_value.entity';
import { CustomField } from '../modules/custom_field/entities/custom_field.entity';
import { ContractSiteService } from '../modules/contract_site_service/entities/contract_site_service.entity';
import { ContractSite } from '../modules/contract_site/entities/contract_site.entity';
import { Contract } from '../modules/contract/entities/contract.entity';
import { ContactClientUse } from '../modules/contact_client_use/entities/contact_client_use.entity';
import { Client } from '../modules/client/entities/client.entity';
import { ClientSite } from '../modules/client_site/entities/client_site.entity';
import { CompanyConfig } from '../modules/company_config/entities/company_config.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Perusahaan } from '../modules/perusahaan/entities/perusahaan.entity'; 

const entt = [Perusahaan, CompanyConfig, ClientSite, Client,
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
    WorkScheduleTeknisi,];

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