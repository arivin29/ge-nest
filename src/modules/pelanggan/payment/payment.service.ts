import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPayment } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPaymentDto } from 'src/dto/pelanggan/pelanggan.payment.dto';
            

@Injectable()
export class PaymentService extends BaseService<PelangganPayment> {
  constructor(
    @InjectRepository(PelangganPayment,'pelanggan')
    repo: Repository<PelangganPayment>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPaymentDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPaymentDto);
    }
}
