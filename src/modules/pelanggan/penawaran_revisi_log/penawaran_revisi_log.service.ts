import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganPenawaranRevisiLog } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class PenawaranRevisiLogService extends BaseService<PelangganPenawaranRevisiLog> {
  constructor(
    @InjectRepository(PelangganPenawaranRevisiLog,'pelanggan')
    repo: Repository<PelangganPenawaranRevisiLog>,
  ) {
    super(repo);
  }
}
