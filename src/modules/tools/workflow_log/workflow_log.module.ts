import { WorkflowLogWidgetController } from './workflow_log_widget.controller';
import { WorkflowLogWidgetService } from './workflow_log_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowLogService } from './workflow_log.service';
import { WorkflowLogController } from './workflow_log.controller';
import { ToolsWorkflowLog } from 'src/entities/tools';
import { WorkflowLogReportController } from './workflow_log_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsWorkflowLog],'tools')],
  controllers: [WorkflowLogController, WorkflowLogReportController, WorkflowLogWidgetController],
  providers: [WorkflowLogService, WorkflowLogWidgetService],
})
export class WorkflowLogModule {}
