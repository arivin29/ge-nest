import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/users.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class UsersService extends BaseService<Users> {
  constructor(
    @InjectRepository(Users)
    repo: Repository<Users>,
  ) {
    super(repo);
  }
}
