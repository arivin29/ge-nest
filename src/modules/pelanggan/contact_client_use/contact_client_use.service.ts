import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContactClientUse } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganContactClientUseDto } from 'src/dto/pelanggan/pelanggan.contact_client_use.dto';
            

@Injectable()
export class ContactClientUseService extends BaseService<PelangganContactClientUse> {
  constructor(
    @InjectRepository(PelangganContactClientUse,'pelanggan')
    repo: Repository<PelangganContactClientUse>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganContactClientUseDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganContactClientUseDto);
    }
}
