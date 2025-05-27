import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLibReference } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class LibReferenceService extends BaseService<AmimsLibReference> {
  constructor(
    @InjectRepository(AmimsLibReference,'amims')
    repo: Repository<AmimsLibReference>,
  ) {
    super(repo);
  }
}
