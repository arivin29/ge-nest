import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclUsers } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UsersService extends BaseService<AclUsers> {
  constructor(
      @InjectRepository(AclUsers, 'acl')
    repo: Repository<AclUsers>,
  ) {
    super(repo);
  }
}
