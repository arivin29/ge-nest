import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLogSp } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsLogSpDto } from 'src/dto/amims/amims.log_sp.dto';
            

@Injectable()
export class LogSpService extends BaseService<AmimsLogSp> {
  constructor(
    @InjectRepository(AmimsLogSp,'amims')
    repo: Repository<AmimsLogSp>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLogSpDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsLogSpDto);
    }
}
