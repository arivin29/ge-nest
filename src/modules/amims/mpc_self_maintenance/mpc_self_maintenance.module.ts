import { MpcSelfMaintenanceWidgetController } from './mpc_self_maintenance_widget.controller';
import { MpcSelfMaintenanceWidgetService } from './mpc_self_maintenance_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcSelfMaintenanceService } from './mpc_self_maintenance.service';
import { MpcSelfMaintenanceController } from './mpc_self_maintenance.controller';
import { AmimsMpcSelfMaintenance } from 'src/entities/amims';
import { MpcSelfMaintenanceReportController } from './mpc_self_maintenance_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcSelfMaintenance],'amims')],
  controllers: [MpcSelfMaintenanceController, MpcSelfMaintenanceReportController, MpcSelfMaintenanceWidgetController],
  providers: [MpcSelfMaintenanceService, MpcSelfMaintenanceWidgetService],
})
export class MpcSelfMaintenanceModule {}
