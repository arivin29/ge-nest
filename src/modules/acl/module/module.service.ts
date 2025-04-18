import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AclModule } from 'src/entities/acl';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ModuleService extends BaseService<AclModule> {
  constructor(
    @InjectRepository(AclModule,'acl')
    repo: Repository<AclModule>,
  ) {
    super(repo);
  }
}
