import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcJo } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcJoDto } from 'src/dto/amims/amims.mpc_jo.dto';
            

@Injectable()
export class MpcJoService extends BaseService<AmimsMpcJo> {
  constructor(
    @InjectRepository(AmimsMpcJo,'amims')
    repo: Repository<AmimsMpcJo>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcJoDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcJoDto);
    }
}
