import { MaintenanceProgramItemWidgetController } from './maintenance_program_item_widget.controller';
import { MaintenanceProgramItemWidgetService } from './maintenance_program_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramItemService } from './maintenance_program_item.service';
import { MaintenanceProgramItemController } from './maintenance_program_item.controller';
import { AmimsMaintenanceProgramItem } from 'src/entities/amims';
import { MaintenanceProgramItemReportController } from './maintenance_program_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgramItem],'amims')],
  controllers: [MaintenanceProgramItemController, MaintenanceProgramItemReportController, MaintenanceProgramItemWidgetController],
  providers: [MaintenanceProgramItemService, MaintenanceProgramItemWidgetService],
})
export class MaintenanceProgramItemModule {}
