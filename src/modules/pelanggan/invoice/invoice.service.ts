import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganInvoice } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganInvoiceDto } from 'src/dto/pelanggan/pelanggan.invoice.dto';
            

@Injectable()
export class InvoiceService extends BaseService<PelangganInvoice> {
  constructor(
    @InjectRepository(PelangganInvoice,'pelanggan')
    repo: Repository<PelangganInvoice>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganInvoiceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganInvoiceDto);
    }
}
