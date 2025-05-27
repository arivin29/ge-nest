import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPilot } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPilotDto } from 'src/dto/amims/amims.pilot.dto';
            

@Injectable()
export class PilotService extends BaseService<AmimsPilot> {
  constructor(
    @InjectRepository(AmimsPilot,'amims')
    repo: Repository<AmimsPilot>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPilotDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPilotDto);
    }
}
