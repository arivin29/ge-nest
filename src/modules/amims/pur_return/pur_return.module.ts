import { PurReturnWidgetController } from './pur_return_widget.controller';
import { PurReturnWidgetService } from './pur_return_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurReturnService } from './pur_return.service';
import { PurReturnController } from './pur_return.controller';
import { AmimsPurReturn } from 'src/entities/amims';
import { PurReturnReportController } from './pur_return_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurReturn],'amims')],
  controllers: [PurReturnController, PurReturnReportController, PurReturnWidgetController],
  providers: [PurReturnService, PurReturnWidgetService],
})
export class PurReturnModule {}
