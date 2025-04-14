import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflow } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WorkflowService extends BaseService<ToolsWorkflow> {
  constructor(
    @InjectRepository(ToolsWorkflow,'tools')
    repo: Repository<ToolsWorkflow>,
  ) {
    super(repo);
  }
}
