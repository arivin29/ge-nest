import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganSaleShipping } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganSaleShippingDto } from 'src/dto/pelanggan/pelanggan.sale_shipping.dto';
            

@Injectable()
export class SaleShippingService extends BaseService<PelangganSaleShipping> {
  constructor(
    @InjectRepository(PelangganSaleShipping,'pelanggan')
    repo: Repository<PelangganSaleShipping>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganSaleShippingDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganSaleShippingDto);
    }
}
