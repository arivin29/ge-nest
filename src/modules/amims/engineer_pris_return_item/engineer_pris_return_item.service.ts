import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPrisReturnItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPrisReturnItemDto } from 'src/dto/amims/amims.engineer_pris_return_item.dto';
            

@Injectable()
export class EngineerPrisReturnItemService extends BaseService<AmimsEngineerPrisReturnItem> {
  constructor(
    @InjectRepository(AmimsEngineerPrisReturnItem,'amims')
    repo: Repository<AmimsEngineerPrisReturnItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPrisReturnItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPrisReturnItemDto);
    }
}
