import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPrisReturn } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPrisReturnDto } from 'src/dto/amims/amims.engineer_pris_return.dto';
            

@Injectable()
export class EngineerPrisReturnService extends BaseService<AmimsEngineerPrisReturn> {
  constructor(
    @InjectRepository(AmimsEngineerPrisReturn,'amims')
    repo: Repository<AmimsEngineerPrisReturn>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPrisReturnDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPrisReturnDto);
    }
}
