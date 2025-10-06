import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsWorkCompleted } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsWorkCompletedDto } from 'src/dto/amims/amims.work_completed.dto';
            

@Injectable()
export class WorkCompletedService extends BaseService<AmimsWorkCompleted> {
  constructor(
    @InjectRepository(AmimsWorkCompleted,'amims')
    repo: Repository<AmimsWorkCompleted>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsWorkCompletedDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsWorkCompletedDto);
    }
}
