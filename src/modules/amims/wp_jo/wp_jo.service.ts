import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsWpJo } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsWpJoDto } from 'src/dto/amims/amims.wp_jo.dto';
            

@Injectable()
export class WpJoService extends BaseService<AmimsWpJo> {
  constructor(
    @InjectRepository(AmimsWpJo,'amims')
    repo: Repository<AmimsWpJo>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsWpJoDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsWpJoDto);
    }
}
