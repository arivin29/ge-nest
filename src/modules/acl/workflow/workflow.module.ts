import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowService } from './workflow.service';
import { WorkflowController } from './workflow.controller';
import { ToolsWorkflow } from 'src/entities/tools';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsWorkflow],'tools')],
  controllers: [WorkflowController],
  providers: [WorkflowService],
})
export class WorkflowModule {}
