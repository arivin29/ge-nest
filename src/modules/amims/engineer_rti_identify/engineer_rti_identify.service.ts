import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerRtiIdentify } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerRtiIdentifyDto } from 'src/dto/amims/amims.engineer_rti_identify.dto';
            

@Injectable()
export class EngineerRtiIdentifyService extends BaseService<AmimsEngineerRtiIdentify> {
  constructor(
    @InjectRepository(AmimsEngineerRtiIdentify,'amims')
    repo: Repository<AmimsEngineerRtiIdentify>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerRtiIdentifyDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerRtiIdentifyDto);
    }
}
