import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsStoreTransferItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsStoreTransferItemDto } from 'src/dto/amims/amims.store_transfer_item.dto';
            

@Injectable()
export class StoreTransferItemService extends BaseService<AmimsStoreTransferItem> {
  constructor(
    @InjectRepository(AmimsStoreTransferItem,'amims')
    repo: Repository<AmimsStoreTransferItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsStoreTransferItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsStoreTransferItemDto);
    }
}
