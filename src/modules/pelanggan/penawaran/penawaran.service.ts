import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPenawaran } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPenawaranDto } from 'src/dto/pelanggan/pelanggan.penawaran.dto';
            

@Injectable()
export class PenawaranService extends BaseService<PelangganPenawaran> {
  constructor(
    @InjectRepository(PelangganPenawaran,'pelanggan')
    repo: Repository<PelangganPenawaran>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPenawaranDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPenawaranDto);
    }
}
