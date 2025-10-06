import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceProgram } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMaintenanceProgramDto } from 'src/dto/amims/amims.maintenance_program.dto';
            

@Injectable()
export class MaintenanceProgramService extends BaseService<AmimsMaintenanceProgram> {
  constructor(
    @InjectRepository(AmimsMaintenanceProgram,'amims')
    repo: Repository<AmimsMaintenanceProgram>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMaintenanceProgramDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMaintenanceProgramDto);
    }
}
