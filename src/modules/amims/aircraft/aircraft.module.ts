import { AircraftWidgetController } from './aircraft_widget.controller';
import { AircraftWidgetService } from './aircraft_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AircraftService } from './aircraft.service';
import { AircraftController } from './aircraft.controller';
import { AmimsAircraft } from 'src/entities/amims';
import { AircraftReportController } from './aircraft_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsAircraft],'amims')],
  controllers: [AircraftController, AircraftReportController, AircraftWidgetController],
  providers: [AircraftService, AircraftWidgetService],
})
export class AircraftModule {}
