import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLibFormIssued } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class LibFormIssuedService extends BaseService<AmimsLibFormIssued> {
  constructor(
    @InjectRepository(AmimsLibFormIssued,'amims')
    repo: Repository<AmimsLibFormIssued>,
  ) {
    super(repo);
  }
}
