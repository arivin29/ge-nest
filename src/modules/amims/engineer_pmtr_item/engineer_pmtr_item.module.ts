import { EngineerPmtrItemWidgetController } from './engineer_pmtr_item_widget.controller';
import { EngineerPmtrItemWidgetService } from './engineer_pmtr_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPmtrItemService } from './engineer_pmtr_item.service';
import { EngineerPmtrItemController } from './engineer_pmtr_item.controller';
import { AmimsEngineerPmtrItem } from 'src/entities/amims';
import { EngineerPmtrItemReportController } from './engineer_pmtr_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPmtrItem],'amims')],
  controllers: [EngineerPmtrItemController, EngineerPmtrItemReportController, EngineerPmtrItemWidgetController],
  providers: [EngineerPmtrItemService, EngineerPmtrItemWidgetService],
})
export class EngineerPmtrItemModule {}
