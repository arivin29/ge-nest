import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPart } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartDto } from 'src/dto/amims/amims.part.dto';
            

@Injectable()
export class PartService extends BaseService<AmimsPart> {
  constructor(
    @InjectRepository(AmimsPart,'amims')
    repo: Repository<AmimsPart>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartDto);
    }
}
