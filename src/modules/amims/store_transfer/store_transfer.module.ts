import { StoreTransferWidgetController } from './store_transfer_widget.controller';
import { StoreTransferWidgetService } from './store_transfer_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreTransferService } from './store_transfer.service';
import { StoreTransferController } from './store_transfer.controller';
import { AmimsStoreTransfer } from 'src/entities/amims';
import { StoreTransferReportController } from './store_transfer_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsStoreTransfer],'amims')],
  controllers: [StoreTransferController, StoreTransferReportController, StoreTransferWidgetController],
  providers: [StoreTransferService, StoreTransferWidgetService],
})
export class StoreTransferModule {}
