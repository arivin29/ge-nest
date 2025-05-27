import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurPoItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurPoItemDto } from 'src/dto/amims/amims.pur_po_item.dto';
            

@Injectable()
export class PurPoItemService extends BaseService<AmimsPurPoItem> {
  constructor(
    @InjectRepository(AmimsPurPoItem,'amims')
    repo: Repository<AmimsPurPoItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurPoItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurPoItemDto);
    }
}
