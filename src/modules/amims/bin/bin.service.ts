import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsBin } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsBinDto } from 'src/dto/amims/amims.bin.dto';
            

@Injectable()
export class BinService extends BaseService<AmimsBin> {
  constructor(
    @InjectRepository(AmimsBin,'amims')
    repo: Repository<AmimsBin>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsBinDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsBinDto);
    }
}
