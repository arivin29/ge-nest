import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurGrnItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurGrnItemDto } from 'src/dto/amims/amims.pur_grn_item.dto';
            

@Injectable()
export class PurGrnItemService extends BaseService<AmimsPurGrnItem> {
  constructor(
    @InjectRepository(AmimsPurGrnItem,'amims')
    repo: Repository<AmimsPurGrnItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurGrnItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurGrnItemDto);
    }
}
