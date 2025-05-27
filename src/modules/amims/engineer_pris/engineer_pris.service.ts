import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerPris } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerPrisDto } from 'src/dto/amims/amims.engineer_pris.dto';
            

@Injectable()
export class EngineerPrisService extends BaseService<AmimsEngineerPris> {
  constructor(
    @InjectRepository(AmimsEngineerPris,'amims')
    repo: Repository<AmimsEngineerPris>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerPrisDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerPrisDto);
    }
}
