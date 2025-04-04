import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './entities/contract.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContractService extends BaseService<Contract> {
  constructor(
    @InjectRepository(Contract)
    repo: Repository<Contract>,
  ) {
    super(repo);
  }
}
