import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyConfig } from './entities/company_config.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class CompanyConfigService extends BaseService<CompanyConfig> {
  constructor(
    @InjectRepository(CompanyConfig)
    repo: Repository<CompanyConfig>,
  ) {
    super(repo);
  }
}
