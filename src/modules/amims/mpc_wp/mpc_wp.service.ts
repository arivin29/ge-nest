import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcWp } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcWpDto } from 'src/dto/amims/amims.mpc_wp.dto';
            

@Injectable()
export class MpcWpService extends BaseService<AmimsMpcWp> {
  constructor(
    @InjectRepository(AmimsMpcWp,'amims')
    repo: Repository<AmimsMpcWp>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcWpDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcWpDto);
    }
}
