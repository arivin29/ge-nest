import { WorkScheduleTeknisiWidgetController } from './work_schedule_teknisi_widget.controller';
import { WorkScheduleTeknisiWidgetService } from './work_schedule_teknisi_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleTeknisiService } from './work_schedule_teknisi.service';
import { WorkScheduleTeknisiController } from './work_schedule_teknisi.controller';
import { PelangganWorkScheduleTeknisi } from 'src/entities/pelanggan';
import { WorkScheduleTeknisiReportController } from './work_schedule_teknisi_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganWorkScheduleTeknisi],'pelanggan')],
  controllers: [WorkScheduleTeknisiController, WorkScheduleTeknisiReportController, WorkScheduleTeknisiWidgetController],
  providers: [WorkScheduleTeknisiService, WorkScheduleTeknisiWidgetService],
})
export class WorkScheduleTeknisiModule {}
