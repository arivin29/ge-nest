import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPrisItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPrisItemDto } from 'src/dto/amims/amims.engineer_pris_item.dto';
            

@Injectable()
export class EngineerPrisItemService extends BaseService<AmimsEngineerPrisItem> {
  constructor(
    @InjectRepository(AmimsEngineerPrisItem,'amims')
    repo: Repository<AmimsEngineerPrisItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPrisItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPrisItemDto);
    }
}
