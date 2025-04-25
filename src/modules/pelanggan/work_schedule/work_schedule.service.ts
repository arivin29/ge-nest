import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganWorkSchedule } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganWorkScheduleDto } from 'src/dto/pelanggan/pelanggan.work_schedule.dto';
            

@Injectable()
export class WorkScheduleService extends BaseService<PelangganWorkSchedule> {
  constructor(
    @InjectRepository(PelangganWorkSchedule,'pelanggan')
    repo: Repository<PelangganWorkSchedule>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganWorkScheduleDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganWorkScheduleDto);
    }
}
