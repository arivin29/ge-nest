import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkScheduleTeknisi } from './entities/work_schedule_teknisi.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WorkScheduleTeknisiService extends BaseService<WorkScheduleTeknisi> {
  constructor(
    @InjectRepository(WorkScheduleTeknisi)
    repo: Repository<WorkScheduleTeknisi>,
  ) {
    super(repo);
  }
}
