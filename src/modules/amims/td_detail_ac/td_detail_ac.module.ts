import { TdDetailAcWidgetController } from './td_detail_ac_widget.controller';
import { TdDetailAcWidgetService } from './td_detail_ac_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TdDetailAcService } from './td_detail_ac.service';
import { TdDetailAcController } from './td_detail_ac.controller';
import { AmimsTdDetailAc } from 'src/entities/amims';
import { TdDetailAcReportController } from './td_detail_ac_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTdDetailAc],'amims')],
  controllers: [TdDetailAcController, TdDetailAcReportController, TdDetailAcWidgetController],
  providers: [TdDetailAcService, TdDetailAcWidgetService],
})
export class TdDetailAcModule {}
