import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPurchaseInvoice } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPurchaseInvoiceDto } from 'src/dto/pelanggan/pelanggan.purchase_invoice.dto';
            

@Injectable()
export class PurchaseInvoiceService extends BaseService<PelangganPurchaseInvoice> {
  constructor(
    @InjectRepository(PelangganPurchaseInvoice,'pelanggan')
    repo: Repository<PelangganPurchaseInvoice>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPurchaseInvoiceDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPurchaseInvoiceDto);
    }
}
