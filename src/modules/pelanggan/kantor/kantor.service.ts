import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganKantor } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class KantorService extends BaseService<PelangganKantor> {
  constructor(
    @InjectRepository(PelangganKantor,'pelanggan')
    repo: Repository<PelangganKantor>,
  ) {
    super(repo);
  }
}
