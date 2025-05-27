import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsTechDiscrepancies } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsTechDiscrepanciesDto } from 'src/dto/amims/amims.tech_discrepancies.dto';
            

@Injectable()
export class TechDiscrepanciesService extends BaseService<AmimsTechDiscrepancies> {
  constructor(
    @InjectRepository(AmimsTechDiscrepancies,'amims')
    repo: Repository<AmimsTechDiscrepancies>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsTechDiscrepanciesDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsTechDiscrepanciesDto);
    }
}
