import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsQaTransferItem } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsQaTransferItemDto } from 'src/dto/amims/amims.qa_transfer_item.dto';
            

@Injectable()
export class QaTransferItemService extends BaseService<AmimsQaTransferItem> {
  constructor(
    @InjectRepository(AmimsQaTransferItem,'amims')
    repo: Repository<AmimsQaTransferItem>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsQaTransferItemDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsQaTransferItemDto);
    }
}
