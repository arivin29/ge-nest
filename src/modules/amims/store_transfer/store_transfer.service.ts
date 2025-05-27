import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsStoreTransfer } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsStoreTransferDto } from 'src/dto/amims/amims.store_transfer.dto';
            

@Injectable()
export class StoreTransferService extends BaseService<AmimsStoreTransfer> {
  constructor(
    @InjectRepository(AmimsStoreTransfer,'amims')
    repo: Repository<AmimsStoreTransfer>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsStoreTransferDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsStoreTransferDto);
    }
}
