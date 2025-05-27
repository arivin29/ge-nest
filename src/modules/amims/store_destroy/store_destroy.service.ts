import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsStoreDestroy } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsStoreDestroyDto } from 'src/dto/amims/amims.store_destroy.dto';
            

@Injectable()
export class StoreDestroyService extends BaseService<AmimsStoreDestroy> {
  constructor(
    @InjectRepository(AmimsStoreDestroy,'amims')
    repo: Repository<AmimsStoreDestroy>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsStoreDestroyDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsStoreDestroyDto);
    }
}
