import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from './entities/user_group.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UserGroupService extends BaseService<UserGroup> {
  constructor(
    @InjectRepository(UserGroup)
    repo: Repository<UserGroup>,
  ) {
    super(repo);
  }
}
