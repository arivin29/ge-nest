import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContractJenis } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganContractJenisDto } from 'src/dto/pelanggan/pelanggan.contract_jenis.dto';
            

@Injectable()
export class ContractJenisService extends BaseService<PelangganContractJenis> {
  constructor(
    @InjectRepository(PelangganContractJenis,'pelanggan')
    repo: Repository<PelangganContractJenis>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganContractJenisDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganContractJenisDto);
    }
}
