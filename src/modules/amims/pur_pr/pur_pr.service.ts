import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurPr } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurPrDto } from 'src/dto/amims/amims.pur_pr.dto';
            

@Injectable()
export class PurPrService extends BaseService<AmimsPurPr> {
  constructor(
    @InjectRepository(AmimsPurPr,'amims')
    repo: Repository<AmimsPurPr>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurPrDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurPrDto);
    }
}
