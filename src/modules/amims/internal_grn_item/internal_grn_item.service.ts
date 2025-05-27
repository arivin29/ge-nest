import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsInternalGrnItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsInternalGrnItemDto } from 'src/dto/amims/amims.internal_grn_item.dto';
            

@Injectable()
export class InternalGrnItemService extends BaseService<AmimsInternalGrnItem> {
  constructor(
    @InjectRepository(AmimsInternalGrnItem,'amims')
    repo: Repository<AmimsInternalGrnItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsInternalGrnItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsInternalGrnItemDto);
    }
}
