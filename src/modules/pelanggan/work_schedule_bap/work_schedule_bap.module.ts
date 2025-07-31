import { WorkScheduleBapWidgetController } from './work_schedule_bap_widget.controller';
import { WorkScheduleBapWidgetService } from './work_schedule_bap_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleBapService } from './work_schedule_bap.service';
import { WorkScheduleBapController } from './work_schedule_bap.controller';
import { PelangganWorkScheduleBap } from 'src/entities/pelanggan';
import { WorkScheduleBapReportController } from './work_schedule_bap_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganWorkScheduleBap],'pelanggan')],
  controllers: [WorkScheduleBapController, WorkScheduleBapReportController, WorkScheduleBapWidgetController],
  providers: [WorkScheduleBapService, WorkScheduleBapWidgetService],
})
export class WorkScheduleBapModule {}
