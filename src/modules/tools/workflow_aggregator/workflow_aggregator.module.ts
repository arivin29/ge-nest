import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowAggregatorService } from './workflow_aggregator.service';
import { WorkflowAggregatorController } from './workflow_aggregator.controller';
import { ToolsWorkflow, ToolsWorkflowAggregator, ToolsWorkflowStep } from 'src/entities/tools';
 
@Module({
  imports: [
        TypeOrmModule.forFeature([ToolsWorkflowAggregator, ToolsWorkflow, ToolsWorkflowStep],'tools')
],
  controllers: [WorkflowAggregatorController],
  providers: [WorkflowAggregatorService],
})
export class WorkflowAggregatorModule {}
