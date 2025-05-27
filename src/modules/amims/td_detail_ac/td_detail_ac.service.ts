import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTdDetailAc } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTdDetailAcDto } from 'src/dto/amims/amims.td_detail_ac.dto';
            

@Injectable()
export class TdDetailAcService extends BaseService<AmimsTdDetailAc> {
  constructor(
    @InjectRepository(AmimsTdDetailAc,'amims')
    repo: Repository<AmimsTdDetailAc>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTdDetailAcDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTdDetailAcDto);
    }
}
