import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLogTransfer } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsLogTransferDto } from 'src/dto/amims/amims.log_transfer.dto';
            

@Injectable()
export class LogTransferService extends BaseService<AmimsLogTransfer> {
  constructor(
    @InjectRepository(AmimsLogTransfer,'amims')
    repo: Repository<AmimsLogTransfer>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsLogTransferDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsLogTransferDto);
    }
}
