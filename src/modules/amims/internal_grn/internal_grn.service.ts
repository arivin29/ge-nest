import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsInternalGrn } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsInternalGrnDto } from 'src/dto/amims/amims.internal_grn.dto';
            

@Injectable()
export class InternalGrnService extends BaseService<AmimsInternalGrn> {
  constructor(
    @InjectRepository(AmimsInternalGrn,'amims')
    repo: Repository<AmimsInternalGrn>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsInternalGrnDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsInternalGrnDto);
    }
}
