import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechLogEngine } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechLogEngineDto } from 'src/dto/amims/amims.tech_log_engine.dto';
            

@Injectable()
export class TechLogEngineService extends BaseService<AmimsTechLogEngine> {
  constructor(
    @InjectRepository(AmimsTechLogEngine,'amims')
    repo: Repository<AmimsTechLogEngine>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechLogEngineDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechLogEngineDto);
    }
}
