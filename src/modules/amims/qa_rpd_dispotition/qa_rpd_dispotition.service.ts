import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsQaRpdDispotition } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsQaRpdDispotitionDto } from 'src/dto/amims/amims.qa_rpd_dispotition.dto';
            

@Injectable()
export class QaRpdDispotitionService extends BaseService<AmimsQaRpdDispotition> {
  constructor(
    @InjectRepository(AmimsQaRpdDispotition,'amims')
    repo: Repository<AmimsQaRpdDispotition>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsQaRpdDispotitionDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsQaRpdDispotitionDto);
    }
}
