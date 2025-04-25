import { WorkScheduleTeknisiModule } from './modules/pelanggan/work_schedule_teknisi/work_schedule_teknisi.module';
import { WorkScheduleModule } from './modules/pelanggan/work_schedule/work_schedule.module';
import { TeknisiModule } from './modules/pelanggan/teknisi/teknisi.module';
import { ServiceModule } from './modules/pelanggan/service/service.module';
import { KantorModule } from './modules/pelanggan/kantor/kantor.module';
import { InvoiceModule } from './modules/pelanggan/invoice/invoice.module';
import { FakturModule } from './modules/pelanggan/faktur/faktur.module';
import { ContractSiteServiceModule } from './modules/pelanggan/contract_site_service/contract_site_service.module';
import { ContractSiteModule } from './modules/pelanggan/contract_site/contract_site.module';
import { ContractJenisModule } from './modules/pelanggan/contract_jenis/contract_jenis.module';
import { ContractModule } from './modules/pelanggan/contract/contract.module';
import { ContactClientUseModule } from './modules/pelanggan/contact_client_use/contact_client_use.module';
import { CompanyConfigModule } from './modules/pelanggan/company_config/company_config.module';
import { ClientSiteModule } from './modules/pelanggan/client_site/client_site.module';
import { ClientContactModule } from './modules/pelanggan/client_contact/client_contact.module';


import { DocumentModule } from './modules/document/document/document.module';
import { ModuleModule } from './modules/acl/module/module.module';
import { CustomFieldValueModule } from './modules/tools/custom_field_value/custom_field_value.module';
import { CustomFieldModule } from './modules/tools/custom_field/custom_field.module';
import { CustomFieldGroupModule } from './modules/tools/custom_field_group/custom_field_group.module';
import { WorkflowAggregatorModule } from './modules/tools/workflow_aggregator/workflow_aggregator.module';
import { UserGroupModule } from './modules/acl/user_group/user_group.module';
import { WorkflowLogModule } from './modules/tools/workflow_log/workflow_log.module';
import { WorkflowStepModule } from './modules/tools/workflow_step/workflow_step.module';
import { WorkflowModule } from './modules/tools/workflow/workflow.module';
import { UsersModule } from './modules/acl/users/users.module';
import { UserTokensModule } from './modules/acl/user_tokens/user_tokens.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
import { ClientModule } from './modules/acl/client/client.module';
import { DocumentNumberingModule } from './modules/tools/document_numbering/document_numbering.module';
import { DocumentNumberingCounterModule } from './modules/tools/document_numbering_counter/document_numbering_counter.module';
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
        path: 'pelanggan',
        children: [
            { path: 'client_contact', module: ClientContactModule },
            { path: 'client_site', module: ClientSiteModule },
            { path: 'company_config', module: CompanyConfigModule },
            { path: 'contact_client_use', module: ContactClientUseModule },
            { path: 'contract', module: ContractModule },
            { path: 'contract_jenis', module: ContractJenisModule },
            { path: 'contract_site', module: ContractSiteModule },
            { path: 'contract_site_service', module: ContractSiteServiceModule },
            { path: 'faktur', module: FakturModule },
            { path: 'invoice', module: InvoiceModule },
            { path: 'kantor', module: KantorModule },
            { path: 'service', module: ServiceModule },
            { path: 'teknisi', module: TeknisiModule },
            { path: 'work_schedule', module: WorkScheduleModule },
            { path: 'work_schedule_teknisi', module: WorkScheduleTeknisiModule }]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'auth-protect', // base route
                module: AuthProtectedModule,
            },
            { path: 'document', module: DocumentModule },
            { path: 'user_tokens', module: UserTokensModule },
            { path: 'users', module: UsersModule },
            { path: 'client', module: ClientModule },
            { path: 'workflow', module: WorkflowModule },
            { path: 'workflow_step', module: WorkflowStepModule },
            { path: 'workflow_log', module: WorkflowLogModule },
            { path: 'user_group', module: UserGroupModule },
            { path: 'workflow_aggregator', module: WorkflowAggregatorModule },
            { path: 'custom_field_group', module: CustomFieldGroupModule },
            { path: 'custom_field', module: CustomFieldModule },
            { path: 'custom_field_value', module: CustomFieldValueModule },
            { path: 'module', module: ModuleModule },
            { path: 'document_numbering', module: DocumentNumberingModule },
            { path: 'document_numbering_counter', module: DocumentNumberingCounterModule }],
    },
];
