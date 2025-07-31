import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPenawaranItem } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class PenawaranItemService extends BaseService<PelangganPenawaranItem> {
  constructor(
    @InjectRepository(PelangganPenawaranItem,'pelanggan')
    repo: Repository<PelangganPenawaranItem>,
  ) {
    super(repo);
  }
}
