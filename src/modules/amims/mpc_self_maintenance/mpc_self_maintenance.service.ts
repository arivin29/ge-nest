import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcSelfMaintenance } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcSelfMaintenanceDto } from 'src/dto/amims/amims.mpc_self_maintenance.dto';
            

@Injectable()
export class MpcSelfMaintenanceService extends BaseService<AmimsMpcSelfMaintenance> {
  constructor(
    @InjectRepository(AmimsMpcSelfMaintenance,'amims')
    repo: Repository<AmimsMpcSelfMaintenance>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcSelfMaintenanceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcSelfMaintenanceDto);
    }
}
