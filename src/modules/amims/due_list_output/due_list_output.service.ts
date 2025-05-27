import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsDueListOutput } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsDueListOutputDto } from 'src/dto/amims/amims.due_list_output.dto';
            

@Injectable()
export class DueListOutputService extends BaseService<AmimsDueListOutput> {
  constructor(
    @InjectRepository(AmimsDueListOutput,'amims')
    repo: Repository<AmimsDueListOutput>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsDueListOutputDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsDueListOutputDto);
    }
}
