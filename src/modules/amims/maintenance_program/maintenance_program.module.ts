import { MaintenanceProgramWidgetController } from './maintenance_program_widget.controller';
import { MaintenanceProgramWidgetService } from './maintenance_program_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramService } from './maintenance_program.service';
import { MaintenanceProgramController } from './maintenance_program.controller';
import { AmimsMaintenanceProgram } from 'src/entities/amims';
import { MaintenanceProgramReportController } from './maintenance_program_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgram],'amims')],
  controllers: [MaintenanceProgramController, MaintenanceProgramReportController, MaintenanceProgramWidgetController],
  providers: [MaintenanceProgramService, MaintenanceProgramWidgetService],
})
export class MaintenanceProgramModule {}
