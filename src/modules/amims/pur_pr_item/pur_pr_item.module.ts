import { PurPrItemWidgetController } from './pur_pr_item_widget.controller';
import { PurPrItemWidgetService } from './pur_pr_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurPrItemService } from './pur_pr_item.service';
import { PurPrItemController } from './pur_pr_item.controller';
import { AmimsPurPrItem } from 'src/entities/amims';
import { PurPrItemReportController } from './pur_pr_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurPrItem],'amims')],
  controllers: [PurPrItemController, PurPrItemReportController, PurPrItemWidgetController],
  providers: [PurPrItemService, PurPrItemWidgetService],
})
export class PurPrItemModule {}
