import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflowLog } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WorkflowLogService extends BaseService<ToolsWorkflowLog> {
  constructor(
    @InjectRepository(ToolsWorkflowLog,'tools')
    repo: Repository<ToolsWorkflowLog>,
  ) {
    super(repo);
  }
}
