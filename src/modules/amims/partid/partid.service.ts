import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartid } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartidDto } from 'src/dto/amims/amims.partid.dto';
            

@Injectable()
export class PartidService extends BaseService<AmimsPartid> {
  constructor(
    @InjectRepository(AmimsPartid,'amims')
    repo: Repository<AmimsPartid>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartidDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartidDto);
    }
}
