import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclUsers } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AclUsersDto } from 'src/dto/acl/acl.users.dto';
            

@Injectable()
export class UsersService extends BaseService<AclUsers> {
  constructor(
      @InjectRepository(AclUsers, 'acl')
    repo: Repository<AclUsers>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AclUsersDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AclUsersDto);
    }
}
