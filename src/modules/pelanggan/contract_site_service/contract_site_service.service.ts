import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContractSiteService } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganContractSiteServiceDto } from 'src/dto/pelanggan/pelanggan.contract_site_service.dto';
            

@Injectable()
export class ContractSiteServiceService extends BaseService<PelangganContractSiteService> {
  constructor(
    @InjectRepository(PelangganContractSiteService,'pelanggan')
    repo: Repository<PelangganContractSiteService>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganContractSiteServiceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganContractSiteServiceDto);
    }
}
