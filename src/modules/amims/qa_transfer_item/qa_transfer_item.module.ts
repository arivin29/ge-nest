import { QaTransferItemWidgetController } from './qa_transfer_item_widget.controller';
import { QaTransferItemWidgetService } from './qa_transfer_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaTransferItemService } from './qa_transfer_item.service';
import { QaTransferItemController } from './qa_transfer_item.controller';
import { AmimsQaTransferItem } from 'src/entities/amims';
import { QaTransferItemReportController } from './qa_transfer_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsQaTransferItem],'amims')],
  controllers: [QaTransferItemController, QaTransferItemReportController, QaTransferItemWidgetController],
  providers: [QaTransferItemService, QaTransferItemWidgetService],
})
export class QaTransferItemModule {}
