import { StoreTransferItemWidgetController } from './store_transfer_item_widget.controller';
import { StoreTransferItemWidgetService } from './store_transfer_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreTransferItemService } from './store_transfer_item.service';
import { StoreTransferItemController } from './store_transfer_item.controller';
import { AmimsStoreTransferItem } from 'src/entities/amims';
import { StoreTransferItemReportController } from './store_transfer_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsStoreTransferItem],'amims')],
  controllers: [StoreTransferItemController, StoreTransferItemReportController, StoreTransferItemWidgetController],
  providers: [StoreTransferItemService, StoreTransferItemWidgetService],
})
export class StoreTransferItemModule {}
