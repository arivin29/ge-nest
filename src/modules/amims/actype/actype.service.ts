import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsActype } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsActypeDto } from 'src/dto/amims/amims.actype.dto';
            

@Injectable()
export class ActypeService extends BaseService<AmimsActype> {
  constructor(
    @InjectRepository(AmimsActype,'amims')
    repo: Repository<AmimsActype>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsActypeDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsActypeDto);
    }
}
