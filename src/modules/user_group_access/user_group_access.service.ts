import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroupAccess } from './entities/user_group_access.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UserGroupAccessService extends BaseService<UserGroupAccess> {
  constructor(
    @InjectRepository(UserGroupAccess)
    repo: Repository<UserGroupAccess>,
  ) {
    super(repo);
  }
}
