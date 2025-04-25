import { WorkScheduleWidgetController } from './work_schedule_widget.controller';
import { WorkScheduleWidgetService } from './work_schedule_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleService } from './work_schedule.service';
import { WorkScheduleController } from './work_schedule.controller';
import { PelangganWorkSchedule } from 'src/entities/pelanggan';
import { WorkScheduleReportController } from './work_schedule_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganWorkSchedule],'pelanggan')],
  controllers: [WorkScheduleController, WorkScheduleReportController, WorkScheduleWidgetController],
  providers: [WorkScheduleService, WorkScheduleWidgetService],
})
export class WorkScheduleModule {}
