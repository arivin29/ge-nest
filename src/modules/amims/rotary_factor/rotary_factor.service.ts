import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsRotaryFactor } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsRotaryFactorDto } from 'src/dto/amims/amims.rotary_factor.dto';
            

@Injectable()
export class RotaryFactorService extends BaseService<AmimsRotaryFactor> {
  constructor(
    @InjectRepository(AmimsRotaryFactor,'amims')
    repo: Repository<AmimsRotaryFactor>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsRotaryFactorDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsRotaryFactorDto);
    }
}
