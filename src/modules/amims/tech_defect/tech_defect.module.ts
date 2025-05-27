import { TechDefectWidgetController } from './tech_defect_widget.controller';
import { TechDefectWidgetService } from './tech_defect_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechDefectService } from './tech_defect.service';
import { TechDefectController } from './tech_defect.controller';
import { AmimsTechDefect } from 'src/entities/amims';
import { TechDefectReportController } from './tech_defect_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechDefect],'amims')],
  controllers: [TechDefectController, TechDefectReportController, TechDefectWidgetController],
  providers: [TechDefectService, TechDefectWidgetService],
})
export class TechDefectModule {}
