import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Kantor } from './entities/kantor.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class KantorService extends BaseService<Kantor> {
  constructor(
    @InjectRepository(Kantor)
    repo: Repository<Kantor>,
  ) {
    super(repo);
  }
}
