import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsAircraft } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsAircraftDto } from 'src/dto/amims/amims.aircraft.dto';
            

@Injectable()
export class AircraftService extends BaseService<AmimsAircraft> {
  constructor(
    @InjectRepository(AmimsAircraft,'amims')
    repo: Repository<AmimsAircraft>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsAircraftDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsAircraftDto);
    }
}
