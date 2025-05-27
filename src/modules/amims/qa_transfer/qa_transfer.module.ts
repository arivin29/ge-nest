import { QaTransferWidgetController } from './qa_transfer_widget.controller';
import { QaTransferWidgetService } from './qa_transfer_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QaTransferService } from './qa_transfer.service';
import { QaTransferController } from './qa_transfer.controller';
import { AmimsQaTransfer } from 'src/entities/amims';
import { QaTransferReportController } from './qa_transfer_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsQaTransfer],'amims')],
  controllers: [QaTransferController, QaTransferReportController, QaTransferWidgetController],
  providers: [QaTransferService, QaTransferWidgetService],
})
export class QaTransferModule {}
