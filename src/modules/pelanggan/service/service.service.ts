import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganService } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganServiceDto } from 'src/dto/pelanggan/pelanggan.service.dto';
            

@Injectable()
export class ServiceService extends BaseService<PelangganService> {
  constructor(
    @InjectRepository(PelangganService,'pelanggan')
    repo: Repository<PelangganService>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganServiceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganServiceDto);
    }
}
