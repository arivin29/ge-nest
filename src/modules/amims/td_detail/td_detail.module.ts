import { TdDetailWidgetController } from './td_detail_widget.controller';
import { TdDetailWidgetService } from './td_detail_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TdDetailService } from './td_detail.service';
import { TdDetailController } from './td_detail.controller';
import { AmimsTdDetail } from 'src/entities/amims';
import { TdDetailReportController } from './td_detail_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTdDetail],'amims')],
  controllers: [TdDetailController, TdDetailReportController, TdDetailWidgetController],
  providers: [TdDetailService, TdDetailWidgetService],
})
export class TdDetailModule {}
