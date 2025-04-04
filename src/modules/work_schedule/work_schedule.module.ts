import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleService } from './work_schedule.service';
import { WorkScheduleController } from './work_schedule.controller';
import { WorkSchedule } from './entities/work_schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkSchedule])],
  controllers: [WorkScheduleController],
  providers: [WorkScheduleService],
})
export class WorkScheduleModule {}
