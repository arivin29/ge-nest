import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsInspection } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsInspectionDto } from 'src/dto/amims/amims.inspection.dto';
            

@Injectable()
export class InspectionService extends BaseService<AmimsInspection> {
  constructor(
    @InjectRepository(AmimsInspection,'amims')
    repo: Repository<AmimsInspection>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsInspectionDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsInspectionDto);
    }
}
