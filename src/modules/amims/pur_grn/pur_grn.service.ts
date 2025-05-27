import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurGrn } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurGrnDto } from 'src/dto/amims/amims.pur_grn.dto';
            

@Injectable()
export class PurGrnService extends BaseService<AmimsPurGrn> {
  constructor(
    @InjectRepository(AmimsPurGrn,'amims')
    repo: Repository<AmimsPurGrn>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurGrnDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurGrnDto);
    }
}
