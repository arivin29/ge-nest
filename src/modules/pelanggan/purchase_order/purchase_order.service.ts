import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPurchaseOrder } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganPurchaseOrderDto } from 'src/dto/pelanggan/pelanggan.purchase_order.dto';
            

@Injectable()
export class PurchaseOrderService extends BaseService<PelangganPurchaseOrder> {
  constructor(
    @InjectRepository(PelangganPurchaseOrder,'pelanggan')
    repo: Repository<PelangganPurchaseOrder>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganPurchaseOrderDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganPurchaseOrderDto);
    }
}
