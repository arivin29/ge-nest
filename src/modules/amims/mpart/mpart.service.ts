import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpart } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpartDto } from 'src/dto/amims/amims.mpart.dto';
            

@Injectable()
export class MpartService extends BaseService<AmimsMpart> {
  constructor(
    @InjectRepository(AmimsMpart,'amims')
    repo: Repository<AmimsMpart>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpartDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpartDto);
    }
}
