import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganSalesPenjualanItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganSalesPenjualanItemDto } from 'src/dto/pelanggan/pelanggan.sales_penjualan_item.dto';
            

@Injectable()
export class SalesPenjualanItemService extends BaseService<PelangganSalesPenjualanItem> {
  constructor(
    @InjectRepository(PelangganSalesPenjualanItem,'pelanggan')
    repo: Repository<PelangganSalesPenjualanItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganSalesPenjualanItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganSalesPenjualanItemDto);
    }
}
