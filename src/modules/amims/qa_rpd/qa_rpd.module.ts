import { QaRpdWidgetController } from './qa_rpd_widget.controller';
import { QaRpdWidgetService } from './qa_rpd_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaRpdService } from './qa_rpd.service';
import { QaRpdController } from './qa_rpd.controller';
import { AmimsQaRpd } from 'src/entities/amims';
import { QaRpdReportController } from './qa_rpd_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsQaRpd],'amims')],
  controllers: [QaRpdController, QaRpdReportController, QaRpdWidgetController],
  providers: [QaRpdService, QaRpdWidgetService],
})
export class QaRpdModule {}
