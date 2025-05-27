import { PurGrnItemWidgetController } from './pur_grn_item_widget.controller';
import { PurGrnItemWidgetService } from './pur_grn_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurGrnItemService } from './pur_grn_item.service';
import { PurGrnItemController } from './pur_grn_item.controller';
import { AmimsPurGrnItem } from 'src/entities/amims';
import { PurGrnItemReportController } from './pur_grn_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurGrnItem],'amims')],
  controllers: [PurGrnItemController, PurGrnItemReportController, PurGrnItemWidgetController],
  providers: [PurGrnItemService, PurGrnItemWidgetService],
})
export class PurGrnItemModule {}
