import { ContractJenisModule } from './modules/contract_jenis/contract_jenis.module';
import { ClientContactModule } from './modules/client_contact/client_contact.module';
import { UserGroupModule } from './modules/user_group/user_group.module';
import { UserGroupAccessModule } from './modules/user_group_access/user_group_access.module';
import { ModuleModule } from './modules/module/module.module';
import { UserTokensModule } from './modules/user_tokens/user_tokens.module';
import { UsersModule } from './modules/users/users.module';
import { WorkScheduleTeknisiModule } from './modules/work_schedule_teknisi/work_schedule_teknisi.module';
import { WorkScheduleModule } from './modules/work_schedule/work_schedule.module';
import { ServiceModule } from './modules/service/service.module';
import { KantorModule } from './modules/kantor/kantor.module';
import { InvoiceModule } from './modules/invoice/invoice.module';
import { FakturModule } from './modules/faktur/faktur.module';
import { CustomFieldValueModule } from './modules/custom_field_value/custom_field_value.module';
import { CustomFieldModule } from './modules/custom_field/custom_field.module';
import { ContractSiteServiceModule } from './modules/contract_site_service/contract_site_service.module';
import { ContractSiteModule } from './modules/contract_site/contract_site.module';
import { ContractModule } from './modules/contract/contract.module';
import { ContactClientUseModule } from './modules/contact_client_use/contact_client_use.module';
import { CompanyConfigModule } from './modules/company_config/company_config.module';
import { ClientSiteModule } from './modules/client_site/client_site.module';
import { ClientModule } from './modules/client/client.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
export const routerConfig = [
    {
        path: 'nonauth',
        children: [
            {
                path: 'auth', // base route
                module: AuthModule,
            },

        ]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'auth-protect', // base route
                module: AuthProtectedModule,
            },
            { path: 'client', module: ClientModule },
            { path: 'client_site', module: ClientSiteModule },
            { path: 'company_config', module: CompanyConfigModule },
            { path: 'contact_client_use', module: ContactClientUseModule },
            { path: 'contract', module: ContractModule },
            { path: 'contract_site', module: ContractSiteModule },
            { path: 'contract_site_service', module: ContractSiteServiceModule },
            { path: 'custom_field', module: CustomFieldModule },
            { path: 'custom_field_value', module: CustomFieldValueModule },
            { path: 'faktur', module: FakturModule },
            { path: 'invoice', module: InvoiceModule },
            { path: 'kantor', module: KantorModule },
            { path: 'service', module: ServiceModule },
            { path: 'work_schedule', module: WorkScheduleModule },
            { path: 'work_schedule_teknisi', module: WorkScheduleTeknisiModule },
            { path: 'users', module: UsersModule },
            { path: 'user_tokens', module: UserTokensModule },
            { path: 'module', module: ModuleModule },
            { path: 'user_group_access', module: UserGroupAccessModule },
            { path: 'user_group', module: UserGroupModule },
            { path: 'client_contact', module: ClientContactModule },
            { path: 'contract_jenis', module: ContractJenisModule }
        ],
    },
];
