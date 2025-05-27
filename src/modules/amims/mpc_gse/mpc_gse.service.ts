import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcGse } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcGseDto } from 'src/dto/amims/amims.mpc_gse.dto';
            

@Injectable()
export class MpcGseService extends BaseService<AmimsMpcGse> {
  constructor(
    @InjectRepository(AmimsMpcGse,'amims')
    repo: Repository<AmimsMpcGse>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcGseDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcGseDto);
    }
}
