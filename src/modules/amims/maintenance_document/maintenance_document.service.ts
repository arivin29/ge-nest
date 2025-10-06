import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceDocument } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceDocumentService extends BaseService<AmimsMaintenanceDocument> {
  constructor(
    @InjectRepository(AmimsMaintenanceDocument,'amims')
    repo: Repository<AmimsMaintenanceDocument>,
  ) {
    super(repo);
  }
}
