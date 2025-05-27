import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechLogEngineCheck } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechLogEngineCheckDto } from 'src/dto/amims/amims.tech_log_engine_check.dto';
            

@Injectable()
export class TechLogEngineCheckService extends BaseService<AmimsTechLogEngineCheck> {
  constructor(
    @InjectRepository(AmimsTechLogEngineCheck,'amims')
    repo: Repository<AmimsTechLogEngineCheck>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechLogEngineCheckDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechLogEngineCheckDto);
    }
}
