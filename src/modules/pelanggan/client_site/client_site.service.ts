import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganClientSite } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ClientSiteService extends BaseService<PelangganClientSite> {
  constructor(
    @InjectRepository(PelangganClientSite,'pelanggan')
    repo: Repository<PelangganClientSite>,
  ) {
    super(repo);
  }
}
