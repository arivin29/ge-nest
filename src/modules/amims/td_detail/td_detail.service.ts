import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTdDetail } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTdDetailDto } from 'src/dto/amims/amims.td_detail.dto';
            

@Injectable()
export class TdDetailService extends BaseService<AmimsTdDetail> {
  constructor(
    @InjectRepository(AmimsTdDetail,'amims')
    repo: Repository<AmimsTdDetail>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTdDetailDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTdDetailDto);
    }
}
