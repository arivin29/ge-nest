import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faktur } from './entities/faktur.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class FakturService extends BaseService<Faktur> {
  constructor(
    @InjectRepository(Faktur)
    repo: Repository<Faktur>,
  ) {
    super(repo);
  }
}
