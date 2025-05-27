import { InspectionWidgetController } from './inspection_widget.controller';
import { InspectionWidgetService } from './inspection_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionService } from './inspection.service';
import { InspectionController } from './inspection.controller';
import { AmimsInspection } from 'src/entities/amims';
import { InspectionReportController } from './inspection_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsInspection],'amims')],
  controllers: [InspectionController, InspectionReportController, InspectionWidgetController],
  providers: [InspectionService, InspectionWidgetService],
})
export class InspectionModule {}
