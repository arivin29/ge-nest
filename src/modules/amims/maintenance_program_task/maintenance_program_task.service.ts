import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsMaintenanceProgramTask } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class MaintenanceProgramTaskService extends BaseService<AmimsMaintenanceProgramTask> {
  constructor(
    @InjectRepository(AmimsMaintenanceProgramTask,'amims')
    repo: Repository<AmimsMaintenanceProgramTask>,
  ) {
    super(repo);
  }
}
