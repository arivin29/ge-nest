import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartInstallOld } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartInstallOldDto } from 'src/dto/amims/amims.part_install_old.dto';
            

@Injectable()
export class PartInstallOldService extends BaseService<AmimsPartInstallOld> {
  constructor(
    @InjectRepository(AmimsPartInstallOld,'amims')
    repo: Repository<AmimsPartInstallOld>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartInstallOldDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartInstallOldDto);
    }
}
