import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclUserTokens } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UserTokensService extends BaseService<AclUserTokens> {
  constructor(
    @InjectRepository(AclUserTokens,'acl')
    repo: Repository<AclUserTokens>,
  ) {
    super(repo);
  }
}
