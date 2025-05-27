import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMcurrency } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class McurrencyService extends BaseService<AmimsMcurrency> {
  constructor(
    @InjectRepository(AmimsMcurrency,'amims')
    repo: Repository<AmimsMcurrency>,
  ) {
    super(repo);
  }
}
