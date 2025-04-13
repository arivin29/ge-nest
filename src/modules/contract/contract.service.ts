import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './entities/contract.entity';
import { BaseService } from 'src/common/base/base.service';
import { smartQueryEngineJoinMode,smartQueryRawJoinMode, SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
import { ContractDto } from './dto/contract.dto';

@Injectable()
export class ContractService extends BaseService<Contract> {
  constructor(
    @InjectRepository(Contract)
    repo: Repository<Contract>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
        // return smartQueryEngineJoinMode(this.repo, 'e', query,ContractDto);
        return smartQueryRawJoinMode(this.repo, 'e', query,ContractDto);
    }
}
