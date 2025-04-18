import { WorkflowStepWidgetController } from './workflow_step_widget.controller';
import { WorkflowStepWidgetService } from './workflow_step_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowStepService } from './workflow_step.service';
import { WorkflowStepController } from './workflow_step.controller';
import { ToolsWorkflowStep } from 'src/entities/tools';
import { WorkflowStepReportController } from './workflow_step_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsWorkflowStep],'tools')],
  controllers: [WorkflowStepController, WorkflowStepReportController, WorkflowStepWidgetController],
  providers: [WorkflowStepService, WorkflowStepWidgetService],
})
export class WorkflowStepModule {}
