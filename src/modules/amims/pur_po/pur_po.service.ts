import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurPo } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurPoDto } from 'src/dto/amims/amims.pur_po.dto';
            

@Injectable()
export class PurPoService extends BaseService<AmimsPurPo> {
  constructor(
    @InjectRepository(AmimsPurPo,'amims')
    repo: Repository<AmimsPurPo>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurPoDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurPoDto);
    }
}
