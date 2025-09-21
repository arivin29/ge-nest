import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganInvoiceItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganInvoiceItemDto } from 'src/dto/pelanggan/pelanggan.invoice_item.dto';
            

@Injectable()
export class InvoiceItemService extends BaseService<PelangganInvoiceItem> {
  constructor(
    @InjectRepository(PelangganInvoiceItem,'pelanggan')
    repo: Repository<PelangganInvoiceItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganInvoiceItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganInvoiceItemDto);
    }
}
