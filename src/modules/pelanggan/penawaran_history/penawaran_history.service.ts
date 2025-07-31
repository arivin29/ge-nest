import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPenawaranHistory } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPenawaranHistoryDto } from 'src/dto/pelanggan/pelanggan.penawaran_history.dto';
            

@Injectable()
export class PenawaranHistoryService extends BaseService<PelangganPenawaranHistory> {
  constructor(
    @InjectRepository(PelangganPenawaranHistory,'pelanggan')
    repo: Repository<PelangganPenawaranHistory>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPenawaranHistoryDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPenawaranHistoryDto);
    }
}
