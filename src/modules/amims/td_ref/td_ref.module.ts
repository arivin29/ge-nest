import { TdRefWidgetController } from './td_ref_widget.controller';
import { TdRefWidgetService } from './td_ref_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TdRefService } from './td_ref.service';
import { TdRefController } from './td_ref.controller';
import { AmimsTdRef } from 'src/entities/amims';
import { TdRefReportController } from './td_ref_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTdRef],'amims')],
  controllers: [TdRefController, TdRefReportController, TdRefWidgetController],
  providers: [TdRefService, TdRefWidgetService],
})
export class TdRefModule {}
