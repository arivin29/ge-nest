import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsConditionMonitoring } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsConditionMonitoringDto } from 'src/dto/amims/amims.condition_monitoring.dto';
            

@Injectable()
export class ConditionMonitoringService extends BaseService<AmimsConditionMonitoring> {
  constructor(
    @InjectRepository(AmimsConditionMonitoring,'amims')
    repo: Repository<AmimsConditionMonitoring>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsConditionMonitoringDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsConditionMonitoringDto);
    }
}
