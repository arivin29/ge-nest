import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganWorkScheduleTeknisi } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganWorkScheduleTeknisiDto } from 'src/dto/pelanggan/pelanggan.work_schedule_teknisi.dto';
            

@Injectable()
export class WorkScheduleTeknisiService extends BaseService<PelangganWorkScheduleTeknisi> {
  constructor(
    @InjectRepository(PelangganWorkScheduleTeknisi,'pelanggan')
    repo: Repository<PelangganWorkScheduleTeknisi>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganWorkScheduleTeknisiDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganWorkScheduleTeknisiDto);
    }
}
