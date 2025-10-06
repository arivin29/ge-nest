import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceProgramMaterial } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceProgramMaterialService extends BaseService<AmimsMaintenanceProgramMaterial> {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramMaterial,'amims')
    repo: Repository<AmimsMaintenanceProgramMaterial>,
  ) {
    super(repo);
  }
}
