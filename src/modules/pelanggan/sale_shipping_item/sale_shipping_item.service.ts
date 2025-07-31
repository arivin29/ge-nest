import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganSaleShippingItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganSaleShippingItemDto } from 'src/dto/pelanggan/pelanggan.sale_shipping_item.dto';
            

@Injectable()
export class SaleShippingItemService extends BaseService<PelangganSaleShippingItem> {
  constructor(
    @InjectRepository(PelangganSaleShippingItem,'pelanggan')
    repo: Repository<PelangganSaleShippingItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganSaleShippingItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganSaleShippingItemDto);
    }
}
