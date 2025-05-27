import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartCondition } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartConditionDto } from 'src/dto/amims/amims.part_condition.dto';
            

@Injectable()
export class PartConditionService extends BaseService<AmimsPartCondition> {
  constructor(
    @InjectRepository(AmimsPartCondition,'amims')
    repo: Repository<AmimsPartCondition>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartConditionDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartConditionDto);
    }
}
