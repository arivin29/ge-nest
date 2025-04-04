import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactClientUse } from './entities/contact_client_use.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ContactClientUseService extends BaseService<ContactClientUse> {
  constructor(
    @InjectRepository(ContactClientUse)
    repo: Repository<ContactClientUse>,
  ) {
    super(repo);
  }
}
