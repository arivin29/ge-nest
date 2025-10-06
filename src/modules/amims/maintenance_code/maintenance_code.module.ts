import { MaintenanceCodeWidgetController } from './maintenance_code_widget.controller';
import { MaintenanceCodeWidgetService } from './maintenance_code_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceCodeService } from './maintenance_code.service';
import { MaintenanceCodeController } from './maintenance_code.controller';
import { AmimsMaintenanceCode } from 'src/entities/amims';
import { MaintenanceCodeReportController } from './maintenance_code_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceCode],'amims')],
  controllers: [MaintenanceCodeController, MaintenanceCodeReportController, MaintenanceCodeWidgetController],
  providers: [MaintenanceCodeService, MaintenanceCodeWidgetService],
})
export class MaintenanceCodeModule {}
