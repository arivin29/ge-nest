import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceMaterial } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceMaterialService extends BaseService<AmimsMaintenanceMaterial> {
  constructor(
    @InjectRepository(AmimsMaintenanceMaterial,'amims')
    repo: Repository<AmimsMaintenanceMaterial>,
  ) {
    super(repo);
  }
}
