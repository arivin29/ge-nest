import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganBankAccount } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganBankAccountDto } from 'src/dto/pelanggan/pelanggan.bank_account.dto';
            

@Injectable()
export class BankAccountService extends BaseService<PelangganBankAccount> {
  constructor(
    @InjectRepository(PelangganBankAccount,'pelanggan')
    repo: Repository<PelangganBankAccount>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganBankAccountDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganBankAccountDto);
    }
}
