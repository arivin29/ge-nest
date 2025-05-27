import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsStock } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsStockDto } from 'src/dto/amims/amims.stock.dto';
            

@Injectable()
export class StockService extends BaseService<AmimsStock> {
  constructor(
    @InjectRepository(AmimsStock,'amims')
    repo: Repository<AmimsStock>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsStockDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsStockDto);
    }
}
