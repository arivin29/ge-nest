import { PurPoItemWidgetController } from './pur_po_item_widget.controller';
import { PurPoItemWidgetService } from './pur_po_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurPoItemService } from './pur_po_item.service';
import { PurPoItemController } from './pur_po_item.controller';
import { AmimsPurPoItem } from 'src/entities/amims';
import { PurPoItemReportController } from './pur_po_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurPoItem],'amims')],
  controllers: [PurPoItemController, PurPoItemReportController, PurPoItemWidgetController],
  providers: [PurPoItemService, PurPoItemWidgetService],
})
export class PurPoItemModule {}
