import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLogUser } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class LogUserService extends BaseService<AmimsLogUser> {
  constructor(
    @InjectRepository(AmimsLogUser,'amims')
    repo: Repository<AmimsLogUser>,
  ) {
    super(repo);
  }
}
