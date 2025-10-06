import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceCode } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMaintenanceCodeDto } from 'src/dto/amims/amims.maintenance_code.dto';
            

@Injectable()
export class MaintenanceCodeService extends BaseService<AmimsMaintenanceCode> {
  constructor(
    @InjectRepository(AmimsMaintenanceCode,'amims')
    repo: Repository<AmimsMaintenanceCode>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMaintenanceCodeDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMaintenanceCodeDto);
    }
}
