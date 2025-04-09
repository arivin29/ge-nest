import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractJenis } from './entities/contract_jenis.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContractJenisService extends BaseService<ContractJenis> {
  constructor(
    @InjectRepository(ContractJenis)
    repo: Repository<ContractJenis>,
  ) {
    super(repo);
  }
}
