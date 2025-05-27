import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLogProcess } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsLogProcessDto } from 'src/dto/amims/amims.log_process.dto';
            

@Injectable()
export class LogProcessService extends BaseService<AmimsLogProcess> {
  constructor(
    @InjectRepository(AmimsLogProcess,'amims')
    repo: Repository<AmimsLogProcess>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLogProcessDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsLogProcessDto);
    }
}
