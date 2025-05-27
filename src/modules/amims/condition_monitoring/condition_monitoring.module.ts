import { ConditionMonitoringWidgetController } from './condition_monitoring_widget.controller';
import { ConditionMonitoringWidgetService } from './condition_monitoring_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConditionMonitoringService } from './condition_monitoring.service';
import { ConditionMonitoringController } from './condition_monitoring.controller';
import { AmimsConditionMonitoring } from 'src/entities/amims';
import { ConditionMonitoringReportController } from './condition_monitoring_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsConditionMonitoring],'amims')],
  controllers: [ConditionMonitoringController, ConditionMonitoringReportController, ConditionMonitoringWidgetController],
  providers: [ConditionMonitoringService, ConditionMonitoringWidgetService],
})
export class ConditionMonitoringModule {}
