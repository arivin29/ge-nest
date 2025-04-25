import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganCompanyConfig } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganCompanyConfigDto } from 'src/dto/pelanggan/pelanggan.company_config.dto';
            

@Injectable()
export class CompanyConfigService extends BaseService<PelangganCompanyConfig> {
  constructor(
    @InjectRepository(PelangganCompanyConfig,'pelanggan')
    repo: Repository<PelangganCompanyConfig>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganCompanyConfigDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganCompanyConfigDto);
    }
}
