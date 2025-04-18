import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflowStep } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { ToolsWorkflowStepDto } from 'src/dto/tools/tools.workflow_step.dto';
            

@Injectable()
export class WorkflowStepService extends BaseService<ToolsWorkflowStep> {
  constructor(
    @InjectRepository(ToolsWorkflowStep,'tools')
    repo: Repository<ToolsWorkflowStep>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,ToolsWorkflowStepDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,ToolsWorkflowStepDto);
    }
}
