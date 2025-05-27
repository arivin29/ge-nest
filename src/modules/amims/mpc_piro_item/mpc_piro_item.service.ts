import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcPiroItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcPiroItemDto } from 'src/dto/amims/amims.mpc_piro_item.dto';
            

@Injectable()
export class MpcPiroItemService extends BaseService<AmimsMpcPiroItem> {
  constructor(
    @InjectRepository(AmimsMpcPiroItem,'amims')
    repo: Repository<AmimsMpcPiroItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcPiroItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcPiroItemDto);
    }
}
