import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTd } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTdDto } from 'src/dto/amims/amims.td.dto';
            

@Injectable()
export class TdService extends BaseService<AmimsTd> {
  constructor(
    @InjectRepository(AmimsTd,'amims')
    repo: Repository<AmimsTd>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTdDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTdDto);
    }
}
