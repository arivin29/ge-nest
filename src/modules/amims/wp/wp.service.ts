import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsWp } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsWpDto } from 'src/dto/amims/amims.wp.dto';
            

@Injectable()
export class WpService extends BaseService<AmimsWp> {
  constructor(
    @InjectRepository(AmimsWp,'amims')
    repo: Repository<AmimsWp>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsWpDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsWpDto);
    }
}
