import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsQaRpd } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsQaRpdDto } from 'src/dto/amims/amims.qa_rpd.dto';
            

@Injectable()
export class QaRpdService extends BaseService<AmimsQaRpd> {
  constructor(
    @InjectRepository(AmimsQaRpd,'amims')
    repo: Repository<AmimsQaRpd>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsQaRpdDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsQaRpdDto);
    }
}
