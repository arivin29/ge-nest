import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsDueList } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsDueListDto } from 'src/dto/amims/amims.due_list.dto';
            

@Injectable()
export class DueListService extends BaseService<AmimsDueList> {
  constructor(
    @InjectRepository(AmimsDueList,'amims')
    repo: Repository<AmimsDueList>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsDueListDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsDueListDto);
    }
}
