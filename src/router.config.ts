
import { CustomFieldValueModule } from './modules/tools/custom_field_value/custom_field_value.module';
import { CustomFieldModule } from './modules/tools/custom_field/custom_field.module';
import { CustomFieldGroupModule } from './modules/tools/custom_field_group/custom_field_group.module';
import { WorkflowAggregatorModule } from './modules/tools/workflow_aggregator/workflow_aggregator.module';
import { WorkflowLogModule } from './modules/tools/workflow_log/workflow_log.module';
import { WorkflowStepModule } from './modules/tools/workflow_step/workflow_step.module';
import { WorkflowModule } from './modules/tools/workflow/workflow.module';
import { AuthModule } from './auth/auth.module';
import { AuthProtectedModule } from './auth/auth-protected.module';
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
        path: 'auth',
        children: [
            {
                path: 'auth-protect', // base route
                module: AuthProtectedModule,
            },
            { path: 'workflow', module: WorkflowModule },
            { path: 'workflow_step', module: WorkflowStepModule },
            { path: 'workflow_log', module: WorkflowLogModule },
            { path: 'workflow_aggregator', module: WorkflowAggregatorModule },
            { path: 'custom_field_group', module: CustomFieldGroupModule },
            { path: 'custom_field', module: CustomFieldModule },
            { path: 'custom_field_value', module: CustomFieldValueModule },
            { path: 'document_numbering', module: DocumentNumberingModule },
            { path: 'document_numbering_counter', module: DocumentNumberingCounterModule }],
    },
];
