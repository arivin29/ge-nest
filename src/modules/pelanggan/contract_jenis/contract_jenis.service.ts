import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganContractJenis } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContractJenisService extends BaseService<PelangganContractJenis> {
  constructor(
    @InjectRepository(PelangganContractJenis,'pelanggan')
    repo: Repository<PelangganContractJenis>,
  ) {
    super(repo);
  }
}
