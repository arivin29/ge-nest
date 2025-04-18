import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToolsCustomFieldGroup } from 'src/entities/tools';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { ToolsCustomFieldGroupDto } from 'src/dto/tools/tools.custom_field_group.dto';
            

@Injectable()
export class CustomFieldGroupService extends BaseService<ToolsCustomFieldGroup> {
  constructor(
    @InjectRepository(ToolsCustomFieldGroup,'tools')
    repo: Repository<ToolsCustomFieldGroup>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,ToolsCustomFieldGroupDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,ToolsCustomFieldGroupDto);
    }
}
