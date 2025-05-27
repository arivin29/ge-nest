import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsSite } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsSiteDto } from 'src/dto/amims/amims.site.dto';
            

@Injectable()
export class SiteService extends BaseService<AmimsSite> {
  constructor(
    @InjectRepository(AmimsSite,'amims')
    repo: Repository<AmimsSite>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsSiteDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsSiteDto);
    }
}
