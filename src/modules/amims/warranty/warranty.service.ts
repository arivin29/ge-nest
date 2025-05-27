import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsWarranty } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WarrantyService extends BaseService<AmimsWarranty> {
  constructor(
    @InjectRepository(AmimsWarranty,'amims')
    repo: Repository<AmimsWarranty>,
  ) {
    super(repo);
  }
}
