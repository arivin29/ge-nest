import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganClientContact } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ClientContactService extends BaseService<PelangganClientContact> {
  constructor(
    @InjectRepository(PelangganClientContact,'pelanggan')
    repo: Repository<PelangganClientContact>,
  ) {
    super(repo);
  }
}
