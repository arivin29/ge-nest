import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflowStep } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WorkflowStepService extends BaseService<ToolsWorkflowStep> {
  constructor(
    @InjectRepository(ToolsWorkflowStep,'tools')
    repo: Repository<ToolsWorkflowStep>,
  ) {
    super(repo);
  }
}
