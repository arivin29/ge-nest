import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsCompany } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class CompanyService extends BaseService<AmimsCompany> {
  constructor(
    @InjectRepository(AmimsCompany,'amims')
    repo: Repository<AmimsCompany>,
  ) {
    super(repo);
  }
}
