import { PurPrWidgetController } from './pur_pr_widget.controller';
import { PurPrWidgetService } from './pur_pr_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurPrService } from './pur_pr.service';
import { PurPrController } from './pur_pr.controller';
import { AmimsPurPr } from 'src/entities/amims';
import { PurPrReportController } from './pur_pr_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurPr],'amims')],
  controllers: [PurPrController, PurPrReportController, PurPrWidgetController],
  providers: [PurPrService, PurPrWidgetService],
})
export class PurPrModule {}
