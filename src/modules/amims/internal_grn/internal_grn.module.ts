import { InternalGrnWidgetController } from './internal_grn_widget.controller';
import { InternalGrnWidgetService } from './internal_grn_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternalGrnService } from './internal_grn.service';
import { InternalGrnController } from './internal_grn.controller';
import { AmimsInternalGrn } from 'src/entities/amims';
import { InternalGrnReportController } from './internal_grn_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsInternalGrn],'amims')],
  controllers: [InternalGrnController, InternalGrnReportController, InternalGrnWidgetController],
  providers: [InternalGrnService, InternalGrnWidgetService],
})
export class InternalGrnModule {}
