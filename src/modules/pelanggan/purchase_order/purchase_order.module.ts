import { PurchaseOrderWidgetController } from './purchase_order_widget.controller';
import { PurchaseOrderWidgetService } from './purchase_order_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderService } from './purchase_order.service';
import { PurchaseOrderController } from './purchase_order.controller';
import { PelangganPurchaseOrder } from 'src/entities/pelanggan';
import { PurchaseOrderReportController } from './purchase_order_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPurchaseOrder],'pelanggan')],
  controllers: [PurchaseOrderController, PurchaseOrderReportController, PurchaseOrderWidgetController],
  providers: [PurchaseOrderService, PurchaseOrderWidgetService],
})
export class PurchaseOrderModule {}
