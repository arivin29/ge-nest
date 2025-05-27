import { TechLogItemWidgetController } from './tech_log_item_widget.controller';
import { TechLogItemWidgetService } from './tech_log_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechLogItemService } from './tech_log_item.service';
import { TechLogItemController } from './tech_log_item.controller';
import { AmimsTechLogItem } from 'src/entities/amims';
import { TechLogItemReportController } from './tech_log_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechLogItem],'amims')],
  controllers: [TechLogItemController, TechLogItemReportController, TechLogItemWidgetController],
  providers: [TechLogItemService, TechLogItemWidgetService],
})
export class TechLogItemModule {}
