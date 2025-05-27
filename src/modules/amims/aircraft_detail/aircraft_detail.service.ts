import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsAircraftDetail } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsAircraftDetailDto } from 'src/dto/amims/amims.aircraft_detail.dto';
            

@Injectable()
export class AircraftDetailService extends BaseService<AmimsAircraftDetail> {
  constructor(
    @InjectRepository(AmimsAircraftDetail,'amims')
    repo: Repository<AmimsAircraftDetail>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsAircraftDetailDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsAircraftDetailDto);
    }
}
