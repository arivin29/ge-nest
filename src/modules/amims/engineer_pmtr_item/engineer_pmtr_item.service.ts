import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPmtrItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPmtrItemDto } from 'src/dto/amims/amims.engineer_pmtr_item.dto';
            

@Injectable()
export class EngineerPmtrItemService extends BaseService<AmimsEngineerPmtrItem> {
  constructor(
    @InjectRepository(AmimsEngineerPmtrItem,'amims')
    repo: Repository<AmimsEngineerPmtrItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPmtrItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPmtrItemDto);
    }
}
