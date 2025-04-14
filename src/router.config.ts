import { ClientContactModule } from './modules/pelanggan/client_contact/client_contact.module';
import { WorkflowLogModule } from './modules/acl/workflow_log/workflow_log.module';
import { WorkflowStepModule } from './modules/acl/workflow_step/workflow_step.module';
import { WorkflowModule } from './modules/acl/workflow/workflow.module';
import { ClientSiteModule } from './modules/pelanggan/client_site/client_site.module';
import { ContractJenisModule } from './modules/pelanggan/contract_jenis/contract_jenis.module';
import { KantorModule } from './modules/pelanggan/kantor/kantor.module';
import { ContractSiteModule } from './modules/pelanggan/contract_site/contract_site.module'; 
import { UsersModule } from './modules/acl/users/users.module';
import { UserTokensModule } from './modules/acl/user_tokens/user_tokens.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
import { ClientModule } from './modules/acl/client/client.module';
import { ContractModule } from './modules/pelanggan/contract/contract.module';
export const routerConfig = [
    {
        path: 'nonauth',
        children: [
            {
                path: 'auth', // base route
                module: AuthModule,
            },
            { path: 'client_site', module: ClientSiteModule },
      { path: 'client_contact', module: ClientContactModule }]
    },
    {
        path: 'auth',
        children: [
            {
                path: 'auth-protect', // base route
                module: AuthProtectedModule,
            },

            { path: 'user_tokens', module: UserTokensModule },
            { path: 'users', module: UsersModule },
            { path: 'contract', module: ContractModule },
            { path: 'client', module: ClientModule },
            { path: 'contract_site', module: ContractSiteModule },
            { path: 'kantor', module: KantorModule },
            { path: 'contract_jenis', module: ContractJenisModule },

            { path: 'workflow', module: WorkflowModule },
            { path: 'workflow_step', module: WorkflowStepModule },
            { path: 'workflow_log', module: WorkflowLogModule }],
    },
];
