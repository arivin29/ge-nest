import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganTeknisi } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganTeknisiDto } from 'src/dto/pelanggan/pelanggan.teknisi.dto';
            

@Injectable()
export class TeknisiService extends BaseService<PelangganTeknisi> {
  constructor(
    @InjectRepository(PelangganTeknisi,'pelanggan')
    repo: Repository<PelangganTeknisi>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganTeknisiDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganTeknisiDto);
    }
}
