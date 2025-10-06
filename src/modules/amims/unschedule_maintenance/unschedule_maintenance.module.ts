import { UnscheduleMaintenanceWidgetController } from './unschedule_maintenance_widget.controller';
import { UnscheduleMaintenanceWidgetService } from './unschedule_maintenance_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnscheduleMaintenanceService } from './unschedule_maintenance.service';
import { UnscheduleMaintenanceController } from './unschedule_maintenance.controller';
import { AmimsUnscheduleMaintenance } from 'src/entities/amims';
import { UnscheduleMaintenanceReportController } from './unschedule_maintenance_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsUnscheduleMaintenance],'amims')],
  controllers: [UnscheduleMaintenanceController, UnscheduleMaintenanceReportController, UnscheduleMaintenanceWidgetController],
  providers: [UnscheduleMaintenanceService, UnscheduleMaintenanceWidgetService],
})
export class UnscheduleMaintenanceModule {}
