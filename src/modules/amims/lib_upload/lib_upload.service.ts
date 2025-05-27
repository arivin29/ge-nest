import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsLibUpload } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class LibUploadService extends BaseService<AmimsLibUpload> {
  constructor(
    @InjectRepository(AmimsLibUpload,'amims')
    repo: Repository<AmimsLibUpload>,
  ) {
    super(repo);
  }
}
