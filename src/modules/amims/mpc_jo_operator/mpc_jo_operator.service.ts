import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMpcJoOperator } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsMpcJoOperatorDto } from 'src/dto/amims/amims.mpc_jo_operator.dto';
            

@Injectable()
export class MpcJoOperatorService extends BaseService<AmimsMpcJoOperator> {
  constructor(
    @InjectRepository(AmimsMpcJoOperator,'amims')
    repo: Repository<AmimsMpcJoOperator>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsMpcJoOperatorDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsMpcJoOperatorDto);
    }
}
