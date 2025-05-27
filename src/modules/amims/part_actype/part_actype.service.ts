import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartActype } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartActypeDto } from 'src/dto/amims/amims.part_actype.dto';
            

@Injectable()
export class PartActypeService extends BaseService<AmimsPartActype> {
  constructor(
    @InjectRepository(AmimsPartActype,'amims')
    repo: Repository<AmimsPartActype>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartActypeDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartActypeDto);
    }
}
