import { QaRpdDispotitionWidgetController } from './qa_rpd_dispotition_widget.controller';
import { QaRpdDispotitionWidgetService } from './qa_rpd_dispotition_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaRpdDispotitionService } from './qa_rpd_dispotition.service';
import { QaRpdDispotitionController } from './qa_rpd_dispotition.controller';
import { AmimsQaRpdDispotition } from 'src/entities/amims';
import { QaRpdDispotitionReportController } from './qa_rpd_dispotition_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsQaRpdDispotition],'amims')],
  controllers: [QaRpdDispotitionController, QaRpdDispotitionReportController, QaRpdDispotitionWidgetController],
  providers: [QaRpdDispotitionService, QaRpdDispotitionWidgetService],
})
export class QaRpdDispotitionModule {}
