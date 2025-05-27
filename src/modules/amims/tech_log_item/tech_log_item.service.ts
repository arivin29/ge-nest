import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechLogItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechLogItemDto } from 'src/dto/amims/amims.tech_log_item.dto';
            

@Injectable()
export class TechLogItemService extends BaseService<AmimsTechLogItem> {
  constructor(
    @InjectRepository(AmimsTechLogItem,'amims')
    repo: Repository<AmimsTechLogItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechLogItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechLogItemDto);
    }
}
