import { PurPoWidgetController } from './pur_po_widget.controller';
import { PurPoWidgetService } from './pur_po_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurPoService } from './pur_po.service';
import { PurPoController } from './pur_po.controller';
import { AmimsPurPo } from 'src/entities/amims';
import { PurPoReportController } from './pur_po_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurPo],'amims')],
  controllers: [PurPoController, PurPoReportController, PurPoWidgetController],
  providers: [PurPoService, PurPoWidgetService],
})
export class PurPoModule {}
