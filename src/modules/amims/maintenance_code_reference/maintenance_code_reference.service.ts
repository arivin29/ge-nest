import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceCodeReference } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceCodeReferenceService extends BaseService<AmimsMaintenanceCodeReference> {
  constructor(
    @InjectRepository(AmimsMaintenanceCodeReference,'amims')
    repo: Repository<AmimsMaintenanceCodeReference>,
  ) {
    super(repo);
  }
}
