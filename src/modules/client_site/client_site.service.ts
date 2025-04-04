import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientSite } from './entities/client_site.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ClientSiteService extends BaseService<ClientSite> {
  constructor(
    @InjectRepository(ClientSite)
    repo: Repository<ClientSite>,
  ) {
    super(repo);
  }
}
