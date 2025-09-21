import { PurchaseOrderItemWidgetController } from './purchase_order_item_widget.controller';
import { PurchaseOrderItemWidgetService } from './purchase_order_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderItemService } from './purchase_order_item.service';
import { PurchaseOrderItemController } from './purchase_order_item.controller';
import { PelangganPurchaseOrderItem } from 'src/entities/pelanggan';
import { PurchaseOrderItemReportController } from './purchase_order_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPurchaseOrderItem],'pelanggan')],
  controllers: [PurchaseOrderItemController, PurchaseOrderItemReportController, PurchaseOrderItemWidgetController],
  providers: [PurchaseOrderItemService, PurchaseOrderItemWidgetService],
})
export class PurchaseOrderItemModule {}
