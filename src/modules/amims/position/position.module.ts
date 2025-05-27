import { PositionWidgetController } from './position_widget.controller';
import { PositionWidgetService } from './position_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PositionService } from './position.service';
import { PositionController } from './position.controller';
import { AmimsPosition } from 'src/entities/amims';
import { PositionReportController } from './position_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPosition],'amims')],
  controllers: [PositionController, PositionReportController, PositionWidgetController],
  providers: [PositionService, PositionWidgetService],
})
export class PositionModule {}
