import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartFigureIndex } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartFigureIndexDto } from 'src/dto/amims/amims.part_figure_index.dto';
            

@Injectable()
export class PartFigureIndexService extends BaseService<AmimsPartFigureIndex> {
  constructor(
    @InjectRepository(AmimsPartFigureIndex,'amims')
    repo: Repository<AmimsPartFigureIndex>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartFigureIndexDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartFigureIndexDto);
    }
}
