import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartAlternative } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartAlternativeDto } from 'src/dto/amims/amims.part_alternative.dto';
            

@Injectable()
export class PartAlternativeService extends BaseService<AmimsPartAlternative> {
  constructor(
    @InjectRepository(AmimsPartAlternative,'amims')
    repo: Repository<AmimsPartAlternative>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartAlternativeDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartAlternativeDto);
    }
}
