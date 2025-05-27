import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartInstall } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartInstallDto } from 'src/dto/amims/amims.part_install.dto';
            

@Injectable()
export class PartInstallService extends BaseService<AmimsPartInstall> {
  constructor(
    @InjectRepository(AmimsPartInstall,'amims')
    repo: Repository<AmimsPartInstall>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartInstallDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartInstallDto);
    }
}
