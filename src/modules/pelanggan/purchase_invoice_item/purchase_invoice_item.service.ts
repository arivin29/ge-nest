import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPurchaseInvoiceItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPurchaseInvoiceItemDto } from 'src/dto/pelanggan/pelanggan.purchase_invoice_item.dto';
            

@Injectable()
export class PurchaseInvoiceItemService extends BaseService<PelangganPurchaseInvoiceItem> {
  constructor(
    @InjectRepository(PelangganPurchaseInvoiceItem,'pelanggan')
    repo: Repository<PelangganPurchaseInvoiceItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPurchaseInvoiceItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPurchaseInvoiceItemDto);
    }
}
