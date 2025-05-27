import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurPrItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurPrItemDto } from 'src/dto/amims/amims.pur_pr_item.dto';
            

@Injectable()
export class PurPrItemService extends BaseService<AmimsPurPrItem> {
  constructor(
    @InjectRepository(AmimsPurPrItem,'amims')
    repo: Repository<AmimsPurPrItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurPrItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurPrItemDto);
    }
}
