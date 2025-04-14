import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkflowLogService } from './workflow_log.service';
import { WorkflowLogController } from './workflow_log.controller';
import { ToolsWorkflowLog } from 'src/entities/tools';
 
@Module({
  imports: [TypeOrmModule.forFeature([ToolsWorkflowLog],'tools')],
  controllers: [WorkflowLogController],
  providers: [WorkflowLogService],
})
export class WorkflowLogModule {}
