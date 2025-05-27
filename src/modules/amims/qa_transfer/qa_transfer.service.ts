import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsQaTransfer } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsQaTransferDto } from 'src/dto/amims/amims.qa_transfer.dto';
            

@Injectable()
export class QaTransferService extends BaseService<AmimsQaTransfer> {
  constructor(
    @InjectRepository(AmimsQaTransfer,'amims')
    repo: Repository<AmimsQaTransfer>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsQaTransferDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsQaTransferDto);
    }
}
