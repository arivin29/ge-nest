import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLastMaintenance } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsLastMaintenanceDto } from 'src/dto/amims/amims.last_maintenance.dto';
            

@Injectable()
export class LastMaintenanceService extends BaseService<AmimsLastMaintenance> {
  constructor(
    @InjectRepository(AmimsLastMaintenance,'amims')
    repo: Repository<AmimsLastMaintenance>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLastMaintenanceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsLastMaintenanceDto);
    }
}
