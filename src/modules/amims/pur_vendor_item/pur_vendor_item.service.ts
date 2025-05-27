import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurVendorItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurVendorItemDto } from 'src/dto/amims/amims.pur_vendor_item.dto';
            

@Injectable()
export class PurVendorItemService extends BaseService<AmimsPurVendorItem> {
  constructor(
    @InjectRepository(AmimsPurVendorItem,'amims')
    repo: Repository<AmimsPurVendorItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurVendorItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurVendorItemDto);
    }
}
