import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowStepService } from './workflow_step.service';
import { WorkflowStepController } from './workflow_step.controller';
import { ToolsWorkflowStep } from 'src/entities/tools';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsWorkflowStep],'tools')],
  controllers: [WorkflowStepController],
  providers: [WorkflowStepService],
})
export class WorkflowStepModule {}
