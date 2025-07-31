import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganWorkScheduleBap } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganWorkScheduleBapDto } from 'src/dto/pelanggan/pelanggan.work_schedule_bap.dto';
            

@Injectable()
export class WorkScheduleBapService extends BaseService<PelangganWorkScheduleBap> {
  constructor(
    @InjectRepository(PelangganWorkScheduleBap,'pelanggan')
    repo: Repository<PelangganWorkScheduleBap>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganWorkScheduleBapDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganWorkScheduleBapDto);
    }
}
