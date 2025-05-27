import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcPiro } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcPiroDto } from 'src/dto/amims/amims.mpc_piro.dto';
            

@Injectable()
export class MpcPiroService extends BaseService<AmimsMpcPiro> {
  constructor(
    @InjectRepository(AmimsMpcPiro,'amims')
    repo: Repository<AmimsMpcPiro>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcPiroDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcPiroDto);
    }
}
