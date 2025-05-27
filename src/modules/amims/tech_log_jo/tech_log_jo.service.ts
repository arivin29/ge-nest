import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechLogJo } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechLogJoDto } from 'src/dto/amims/amims.tech_log_jo.dto';
            

@Injectable()
export class TechLogJoService extends BaseService<AmimsTechLogJo> {
  constructor(
    @InjectRepository(AmimsTechLogJo,'amims')
    repo: Repository<AmimsTechLogJo>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechLogJoDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechLogJoDto);
    }
}
