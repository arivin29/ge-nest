import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPurchaseOrderItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPurchaseOrderItemDto } from 'src/dto/pelanggan/pelanggan.purchase_order_item.dto';
            

@Injectable()
export class PurchaseOrderItemService extends BaseService<PelangganPurchaseOrderItem> {
  constructor(
    @InjectRepository(PelangganPurchaseOrderItem,'pelanggan')
    repo: Repository<PelangganPurchaseOrderItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPurchaseOrderItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPurchaseOrderItemDto);
    }
}
