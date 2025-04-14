import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContractSite } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganContractSiteDto } from 'src/dto/pelanggan/pelanggan.contract_site.dto';
            

@Injectable()
export class ContractSiteService extends BaseService<PelangganContractSite> {
  constructor(
    @InjectRepository(PelangganContractSite,'pelanggan')
    repo: Repository<PelangganContractSite>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganContractSiteDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganContractSiteDto);
    }
}
