import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPartCategory } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPartCategoryDto } from 'src/dto/amims/amims.part_category.dto';
            

@Injectable()
export class PartCategoryService extends BaseService<AmimsPartCategory> {
  constructor(
    @InjectRepository(AmimsPartCategory,'amims')
    repo: Repository<AmimsPartCategory>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPartCategoryDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPartCategoryDto);
    }
}
