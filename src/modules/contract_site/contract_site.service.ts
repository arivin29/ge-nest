import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractSite } from './entities/contract_site.entity';
import { BaseService } from 'src/common/base/base.service';
import { smartQueryEngineJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { ContractSiteDto } from './dto/contract_site.dto';

@Injectable()
export class ContractSiteService extends BaseService<ContractSite> {
  constructor(
    @InjectRepository(ContractSite)
    repo: Repository<ContractSite>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
        return smartQueryEngineJoinMode(this.repo, 'e', query,ContractSiteDto);
    }
 
}
