import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflow } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { ToolsWorkflowDto } from 'src/dto/tools/tools.workflow.dto';
            

@Injectable()
export class WorkflowService extends BaseService<ToolsWorkflow> {
  constructor(
    @InjectRepository(ToolsWorkflow,'tools')
    repo: Repository<ToolsWorkflow>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,ToolsWorkflowDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,ToolsWorkflowDto);
    }
}
