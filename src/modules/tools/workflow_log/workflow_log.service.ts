import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsWorkflowLog } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { ToolsWorkflowLogDto } from 'src/dto/tools/tools.workflow_log.dto';
            

@Injectable()
export class WorkflowLogService extends BaseService<ToolsWorkflowLog> {
  constructor(
    @InjectRepository(ToolsWorkflowLog,'tools')
    repo: Repository<ToolsWorkflowLog>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,ToolsWorkflowLogDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,ToolsWorkflowLogDto);
    }
}
