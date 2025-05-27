import { MaintenanceWidgetController } from './maintenance_widget.controller';
import { MaintenanceWidgetService } from './maintenance_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceService } from './maintenance.service';
import { MaintenanceController } from './maintenance.controller';
import { AmimsMaintenance } from 'src/entities/amims';
import { MaintenanceReportController } from './maintenance_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenance],'amims')],
  controllers: [MaintenanceController, MaintenanceReportController, MaintenanceWidgetController],
  providers: [MaintenanceService, MaintenanceWidgetService],
})
export class MaintenanceModule {}
