import { LocationFlightWidgetController } from './location_flight_widget.controller';
import { LocationFlightWidgetService } from './location_flight_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationFlightService } from './location_flight.service';
import { LocationFlightController } from './location_flight.controller';
import { AmimsLocationFlight } from 'src/entities/amims';
import { LocationFlightReportController } from './location_flight_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLocationFlight],'amims')],
  controllers: [LocationFlightController, LocationFlightReportController, LocationFlightWidgetController],
  providers: [LocationFlightService, LocationFlightWidgetService],
})
export class LocationFlightModule {}
