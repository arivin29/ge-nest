import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurReturnItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurReturnItemDto } from 'src/dto/amims/amims.pur_return_item.dto';
            

@Injectable()
export class PurReturnItemService extends BaseService<AmimsPurReturnItem> {
  constructor(
    @InjectRepository(AmimsPurReturnItem,'amims')
    repo: Repository<AmimsPurReturnItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurReturnItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurReturnItemDto);
    }
}
