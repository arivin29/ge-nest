import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTdRef } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTdRefDto } from 'src/dto/amims/amims.td_ref.dto';
            

@Injectable()
export class TdRefService extends BaseService<AmimsTdRef> {
  constructor(
    @InjectRepository(AmimsTdRef,'amims')
    repo: Repository<AmimsTdRef>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTdRefDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTdRefDto);
    }
}
