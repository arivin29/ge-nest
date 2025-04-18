import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclUserGroup } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UserGroupService extends BaseService<AclUserGroup> {
  constructor(
    @InjectRepository(AclUserGroup,'acl')
    repo: Repository<AclUserGroup>,
  ) {
    super(repo);
  }
}
