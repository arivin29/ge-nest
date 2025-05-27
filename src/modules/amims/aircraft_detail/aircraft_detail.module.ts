import { AircraftDetailWidgetController } from './aircraft_detail_widget.controller';
import { AircraftDetailWidgetService } from './aircraft_detail_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AircraftDetailService } from './aircraft_detail.service';
import { AircraftDetailController } from './aircraft_detail.controller';
import { AmimsAircraftDetail } from 'src/entities/amims';
import { AircraftDetailReportController } from './aircraft_detail_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsAircraftDetail],'amims')],
  controllers: [AircraftDetailController, AircraftDetailReportController, AircraftDetailWidgetController],
  providers: [AircraftDetailService, AircraftDetailWidgetService],
})
export class AircraftDetailModule {}
