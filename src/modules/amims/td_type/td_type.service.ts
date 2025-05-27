import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTdType } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTdTypeDto } from 'src/dto/amims/amims.td_type.dto';
            

@Injectable()
export class TdTypeService extends BaseService<AmimsTdType> {
  constructor(
    @InjectRepository(AmimsTdType,'amims')
    repo: Repository<AmimsTdType>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTdTypeDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTdTypeDto);
    }
}
