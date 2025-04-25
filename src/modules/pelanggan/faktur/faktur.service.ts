import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganFaktur } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganFakturDto } from 'src/dto/pelanggan/pelanggan.faktur.dto';
            

@Injectable()
export class FakturService extends BaseService<PelangganFaktur> {
  constructor(
    @InjectRepository(PelangganFaktur,'pelanggan')
    repo: Repository<PelangganFaktur>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganFakturDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganFakturDto);
    }
}
