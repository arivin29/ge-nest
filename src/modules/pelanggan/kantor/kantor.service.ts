import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganKantor } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganKantorDto } from 'src/dto/pelanggan/pelanggan.kantor.dto';
            

@Injectable()
export class KantorService extends BaseService<PelangganKantor> {
  constructor(
    @InjectRepository(PelangganKantor,'pelanggan')
    repo: Repository<PelangganKantor>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganKantorDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganKantorDto);
    }
}
