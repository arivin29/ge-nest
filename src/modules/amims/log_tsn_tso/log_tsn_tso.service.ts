import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLogTsnTso } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsLogTsnTsoDto } from 'src/dto/amims/amims.log_tsn_tso.dto';
            

@Injectable()
export class LogTsnTsoService extends BaseService<AmimsLogTsnTso> {
  constructor(
    @InjectRepository(AmimsLogTsnTso,'amims')
    repo: Repository<AmimsLogTsnTso>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLogTsnTsoDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsLogTsnTsoDto);
    }
}
