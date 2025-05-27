import { LastMaintenanceWidgetController } from './last_maintenance_widget.controller';
import { LastMaintenanceWidgetService } from './last_maintenance_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LastMaintenanceService } from './last_maintenance.service';
import { LastMaintenanceController } from './last_maintenance.controller';
import { AmimsLastMaintenance } from 'src/entities/amims';
import { LastMaintenanceReportController } from './last_maintenance_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLastMaintenance],'amims')],
  controllers: [LastMaintenanceController, LastMaintenanceReportController, LastMaintenanceWidgetController],
  providers: [LastMaintenanceService, LastMaintenanceWidgetService],
})
export class LastMaintenanceModule {}
