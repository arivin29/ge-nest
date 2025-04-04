import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkSchedule } from './entities/work_schedule.entity';
import { BaseService } from 'src/common/base/base.service';

@Injectable()
export class WorkScheduleService extends BaseService<WorkSchedule> {
  constructor(
    @InjectRepository(WorkSchedule)
    repo: Repository<WorkSchedule>,
  ) {
    super(repo);
  }
}
