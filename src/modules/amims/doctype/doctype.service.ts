import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsDoctype } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class DoctypeService extends BaseService<AmimsDoctype> {
  constructor(
    @InjectRepository(AmimsDoctype,'amims')
    repo: Repository<AmimsDoctype>,
  ) {
    super(repo);
  }
}
