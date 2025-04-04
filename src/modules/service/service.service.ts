import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class ServiceService extends BaseService<Service> {
  constructor(
    @InjectRepository(Service)
    repo: Repository<Service>,
  ) {
    super(repo);
  }
}
