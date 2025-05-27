import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechDefect } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechDefectDto } from 'src/dto/amims/amims.tech_defect.dto';
            

@Injectable()
export class TechDefectService extends BaseService<AmimsTechDefect> {
  constructor(
    @InjectRepository(AmimsTechDefect,'amims')
    repo: Repository<AmimsTechDefect>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechDefectDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechDefectDto);
    }
}
