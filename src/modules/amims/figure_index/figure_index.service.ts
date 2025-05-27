import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsFigureIndex } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class FigureIndexService extends BaseService<AmimsFigureIndex> {
  constructor(
    @InjectRepository(AmimsFigureIndex,'amims')
    repo: Repository<AmimsFigureIndex>,
  ) {
    super(repo);
  }
}
