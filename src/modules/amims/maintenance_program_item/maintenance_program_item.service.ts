import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceProgramItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMaintenanceProgramItemDto } from 'src/dto/amims/amims.maintenance_program_item.dto';
            

@Injectable()
export class MaintenanceProgramItemService extends BaseService<AmimsMaintenanceProgramItem> {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramItem,'amims')
    repo: Repository<AmimsMaintenanceProgramItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMaintenanceProgramItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMaintenanceProgramItemDto);
    }
}
