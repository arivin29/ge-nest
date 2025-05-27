import { TechDiscrepanciesWidgetController } from './tech_discrepancies_widget.controller';
import { TechDiscrepanciesWidgetService } from './tech_discrepancies_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechDiscrepanciesService } from './tech_discrepancies.service';
import { TechDiscrepanciesController } from './tech_discrepancies.controller';
import { AmimsTechDiscrepancies } from 'src/entities/amims';
import { TechDiscrepanciesReportController } from './tech_discrepancies_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechDiscrepancies],'amims')],
  controllers: [TechDiscrepanciesController, TechDiscrepanciesReportController, TechDiscrepanciesWidgetController],
  providers: [TechDiscrepanciesService, TechDiscrepanciesWidgetService],
})
export class TechDiscrepanciesModule {}
