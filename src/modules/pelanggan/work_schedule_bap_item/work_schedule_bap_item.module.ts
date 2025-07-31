import { WorkScheduleBapItemWidgetController } from './work_schedule_bap_item_widget.controller';
import { WorkScheduleBapItemWidgetService } from './work_schedule_bap_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkScheduleBapItemService } from './work_schedule_bap_item.service';
import { WorkScheduleBapItemController } from './work_schedule_bap_item.controller';
import { PelangganWorkScheduleBapItem } from 'src/entities/pelanggan';
import { WorkScheduleBapItemReportController } from './work_schedule_bap_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganWorkScheduleBapItem],'pelanggan')],
  controllers: [WorkScheduleBapItemController, WorkScheduleBapItemReportController, WorkScheduleBapItemWidgetController],
  providers: [WorkScheduleBapItemService, WorkScheduleBapItemWidgetService],
})
export class WorkScheduleBapItemModule {}
