import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganClientSite } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganClientSiteDto } from 'src/dto/pelanggan/pelanggan.client_site.dto';
            

@Injectable()
export class ClientSiteService extends BaseService<PelangganClientSite> {
  constructor(
    @InjectRepository(PelangganClientSite,'pelanggan')
    repo: Repository<PelangganClientSite>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganClientSiteDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganClientSiteDto);
    }
}
