import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsVDueListOutput } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsVDueListOutputDto } from 'src/dto/amims/amims.v_due_list_output.dto';
            

@Injectable()
export class VDueListOutputService extends BaseService<AmimsVDueListOutput> {
  constructor(
    @InjectRepository(AmimsVDueListOutput,'amims')
    repo: Repository<AmimsVDueListOutput>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsVDueListOutputDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsVDueListOutputDto);
    }
}
