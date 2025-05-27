import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMel } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MelService extends BaseService<AmimsMel> {
  constructor(
    @InjectRepository(AmimsMel,'amims')
    repo: Repository<AmimsMel>,
  ) {
    super(repo);
  }
}
