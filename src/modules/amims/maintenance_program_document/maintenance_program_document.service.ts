import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceProgramDocument } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceProgramDocumentService extends BaseService<AmimsMaintenanceProgramDocument> {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramDocument,'amims')
    repo: Repository<AmimsMaintenanceProgramDocument>,
  ) {
    super(repo);
  }
}
