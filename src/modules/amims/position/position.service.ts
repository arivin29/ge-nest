import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPosition } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPositionDto } from 'src/dto/amims/amims.position.dto';
            

@Injectable()
export class PositionService extends BaseService<AmimsPosition> {
  constructor(
    @InjectRepository(AmimsPosition,'amims')
    repo: Repository<AmimsPosition>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPositionDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPositionDto);
    }
}
