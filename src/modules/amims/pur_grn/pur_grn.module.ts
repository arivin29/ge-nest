import { PurGrnWidgetController } from './pur_grn_widget.controller';
import { PurGrnWidgetService } from './pur_grn_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurGrnService } from './pur_grn.service';
import { PurGrnController } from './pur_grn.controller';
import { AmimsPurGrn } from 'src/entities/amims';
import { PurGrnReportController } from './pur_grn_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurGrn],'amims')],
  controllers: [PurGrnController, PurGrnReportController, PurGrnWidgetController],
  providers: [PurGrnService, PurGrnWidgetService],
})
export class PurGrnModule {}
