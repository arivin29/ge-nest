import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerRti } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerRtiDto } from 'src/dto/amims/amims.engineer_rti.dto';
            

@Injectable()
export class EngineerRtiService extends BaseService<AmimsEngineerRti> {
  constructor(
    @InjectRepository(AmimsEngineerRti,'amims')
    repo: Repository<AmimsEngineerRti>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerRtiDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerRtiDto);
    }
}
