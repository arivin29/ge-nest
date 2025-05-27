import { PurPrclWidgetController } from './pur_prcl_widget.controller';
import { PurPrclWidgetService } from './pur_prcl_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurPrclService } from './pur_prcl.service';
import { PurPrclController } from './pur_prcl.controller';
import { AmimsPurPrcl } from 'src/entities/amims';
import { PurPrclReportController } from './pur_prcl_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurPrcl],'amims')],
  controllers: [PurPrclController, PurPrclReportController, PurPrclWidgetController],
  providers: [PurPrclService, PurPrclWidgetService],
})
export class PurPrclModule {}
