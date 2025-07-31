import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPenawaranTag } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class PenawaranTagService extends BaseService<PelangganPenawaranTag> {
  constructor(
    @InjectRepository(PelangganPenawaranTag,'pelanggan')
    repo: Repository<PelangganPenawaranTag>,
  ) {
    super(repo);
  }
}
