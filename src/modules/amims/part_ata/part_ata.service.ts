import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartAta } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartAtaDto } from 'src/dto/amims/amims.part_ata.dto';
            

@Injectable()
export class PartAtaService extends BaseService<AmimsPartAta> {
  constructor(
    @InjectRepository(AmimsPartAta,'amims')
    repo: Repository<AmimsPartAta>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartAtaDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartAtaDto);
    }
}
