import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientContact } from './entities/client_contact.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ClientContactService extends BaseService<ClientContact> {
  constructor(
    @InjectRepository(ClientContact)
    repo: Repository<ClientContact>,
  ) {
    super(repo);
  }
}
