import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganWorkScheduleBapItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganWorkScheduleBapItemDto } from 'src/dto/pelanggan/pelanggan.work_schedule_bap_item.dto';
            

@Injectable()
export class WorkScheduleBapItemService extends BaseService<PelangganWorkScheduleBapItem> {
  constructor(
    @InjectRepository(PelangganWorkScheduleBapItem,'pelanggan')
    repo: Repository<PelangganWorkScheduleBapItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganWorkScheduleBapItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganWorkScheduleBapItemDto);
    }
}
