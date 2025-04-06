import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserTokens } from './entities/user_tokens.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UserTokensService extends BaseService<UserTokens> {
  constructor(
    @InjectRepository(UserTokens)
    repo: Repository<UserTokens>,
  ) {
    super(repo);
  }
}
