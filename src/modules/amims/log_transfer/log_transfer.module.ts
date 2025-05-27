import { LogTransferWidgetController } from './log_transfer_widget.controller';
import { LogTransferWidgetService } from './log_transfer_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTransferService } from './log_transfer.service';
import { LogTransferController } from './log_transfer.controller';
import { AmimsLogTransfer } from 'src/entities/amims';
import { LogTransferReportController } from './log_transfer_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLogTransfer],'amims')],
  controllers: [LogTransferController, LogTransferReportController, LogTransferWidgetController],
  providers: [LogTransferService, LogTransferWidgetService],
})
export class LogTransferModule {}
