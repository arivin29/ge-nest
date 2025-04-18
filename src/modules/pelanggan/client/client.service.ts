import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganClient } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganClientDto } from 'src/dto/pelanggan/pelanggan.client.dto';
            

@Injectable()
export class ClientService extends BaseService<PelangganClient> {
  constructor(
    @InjectRepository(PelangganClient,'pelanggan')
    repo: Repository<PelangganClient>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganClientDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganClientDto);
    }
}
