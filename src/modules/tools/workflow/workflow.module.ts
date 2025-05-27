import { WorkflowWidgetController } from './workflow_widget.controller';
import { WorkflowWidgetService } from './workflow_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowService } from './workflow.service';
import { WorkflowService as WorkflowServiceApp } from '../workflow-apply/workflow.service';
import { WorkflowController } from './workflow.controller';
import { ToolsWorkflow, ToolsWorkflowAggregator, ToolsWorkflowLog, ToolsWorkflowStep } from 'src/entities/tools';
import { WorkflowApplyController } from '../workflow-apply/workflow-apply.controller';
import { WorkflowReportController } from './workflow_report.controller';
import { AclUsers } from 'src/entities/acl';
import { RedisPublishHelperPenormoran } from 'src/common/redis/penomoram/redis-publish.helper'; 

@Module({
    imports: [
        TypeOrmModule.forFeature([ToolsWorkflow, ToolsWorkflowStep, ToolsWorkflowLog,ToolsWorkflowAggregator], 'tools'),
        TypeOrmModule.forFeature([AclUsers], 'acl'),
    ],
    controllers: [WorkflowController, WorkflowApplyController, WorkflowReportController, WorkflowWidgetController],
    providers: [WorkflowService, WorkflowServiceApp, WorkflowWidgetService, RedisPublishHelperPenormoran],
})
export class WorkflowModule { }
