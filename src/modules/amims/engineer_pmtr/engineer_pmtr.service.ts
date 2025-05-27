import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPmtr } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPmtrDto } from 'src/dto/amims/amims.engineer_pmtr.dto';
            

@Injectable()
export class EngineerPmtrService extends BaseService<AmimsEngineerPmtr> {
  constructor(
    @InjectRepository(AmimsEngineerPmtr,'amims')
    repo: Repository<AmimsEngineerPmtr>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPmtrDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPmtrDto);
    }
}
