import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsStoreThreshold } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsStoreThresholdDto } from 'src/dto/amims/amims.store_threshold.dto';
            

@Injectable()
export class StoreThresholdService extends BaseService<AmimsStoreThreshold> {
  constructor(
    @InjectRepository(AmimsStoreThreshold,'amims')
    repo: Repository<AmimsStoreThreshold>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsStoreThresholdDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsStoreThresholdDto);
    }
}
