import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceCodeFormIssued } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceCodeFormIssuedService extends BaseService<AmimsMaintenanceCodeFormIssued> {
  constructor(
    @InjectRepository(AmimsMaintenanceCodeFormIssued,'amims')
    repo: Repository<AmimsMaintenanceCodeFormIssued>,
  ) {
    super(repo);
  }
}
