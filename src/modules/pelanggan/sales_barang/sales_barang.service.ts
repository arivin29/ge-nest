import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganSalesBarang } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganSalesBarangDto } from 'src/dto/pelanggan/pelanggan.sales_barang.dto';
            

@Injectable()
export class SalesBarangService extends BaseService<PelangganSalesBarang> {
  constructor(
    @InjectRepository(PelangganSalesBarang,'pelanggan')
    repo: Repository<PelangganSalesBarang>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganSalesBarangDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganSalesBarangDto);
    }
}
