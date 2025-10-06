import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsUnscheduleMaintenance } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsUnscheduleMaintenanceDto } from 'src/dto/amims/amims.unschedule_maintenance.dto';
            

@Injectable()
export class UnscheduleMaintenanceService extends BaseService<AmimsUnscheduleMaintenance> {
  constructor(
    @InjectRepository(AmimsUnscheduleMaintenance,'amims')
    repo: Repository<AmimsUnscheduleMaintenance>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsUnscheduleMaintenanceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsUnscheduleMaintenanceDto);
    }
}
