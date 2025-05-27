import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechLog } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechLogDto } from 'src/dto/amims/amims.tech_log.dto';
            

@Injectable()
export class TechLogService extends BaseService<AmimsTechLog> {
  constructor(
    @InjectRepository(AmimsTechLog,'amims')
    repo: Repository<AmimsTechLog>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechLogDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechLogDto);
    }
}
