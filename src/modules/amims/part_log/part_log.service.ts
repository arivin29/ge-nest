import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartLog } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartLogDto } from 'src/dto/amims/amims.part_log.dto';
            

@Injectable()
export class PartLogService extends BaseService<AmimsPartLog> {
  constructor(
    @InjectRepository(AmimsPartLog,'amims')
    repo: Repository<AmimsPartLog>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartLogDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartLogDto);
    }
}
