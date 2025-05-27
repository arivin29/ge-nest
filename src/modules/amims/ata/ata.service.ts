import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsAta } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class AtaService extends BaseService<AmimsAta> {
  constructor(
    @InjectRepository(AmimsAta,'amims')
    repo: Repository<AmimsAta>,
  ) {
    super(repo);
  }
}
