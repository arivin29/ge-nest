import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractSiteService } from './entities/contract_site_service.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContractSiteServiceService extends BaseService<ContractSiteService> {
  constructor(
    @InjectRepository(ContractSiteService)
    repo: Repository<ContractSiteService>,
  ) {
    super(repo);
  }
}
