import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleTeknisiService } from './work_schedule_teknisi.service';
import { WorkScheduleTeknisiController } from './work_schedule_teknisi.controller';
import { WorkScheduleTeknisi } from './entities/work_schedule_teknisi.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WorkScheduleTeknisi])],
  controllers: [WorkScheduleTeknisiController],
  providers: [WorkScheduleTeknisiService],
})
export class WorkScheduleTeknisiModule {}
