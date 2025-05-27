import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurReturn } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurReturnDto } from 'src/dto/amims/amims.pur_return.dto';
            

@Injectable()
export class PurReturnService extends BaseService<AmimsPurReturn> {
  constructor(
    @InjectRepository(AmimsPurReturn,'amims')
    repo: Repository<AmimsPurReturn>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurReturnDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurReturnDto);
    }
}
