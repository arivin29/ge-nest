import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsEngineerRtiPart } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsEngineerRtiPartDto } from 'src/dto/amims/amims.engineer_rti_part.dto';
            

@Injectable()
export class EngineerRtiPartService extends BaseService<AmimsEngineerRtiPart> {
  constructor(
    @InjectRepository(AmimsEngineerRtiPart,'amims')
    repo: Repository<AmimsEngineerRtiPart>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsEngineerRtiPartDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsEngineerRtiPartDto);
    }
}
