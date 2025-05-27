import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurPrcl } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurPrclDto } from 'src/dto/amims/amims.pur_prcl.dto';
            

@Injectable()
export class PurPrclService extends BaseService<AmimsPurPrcl> {
  constructor(
    @InjectRepository(AmimsPurPrcl,'amims')
    repo: Repository<AmimsPurPrcl>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurPrclDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurPrclDto);
    }
}
