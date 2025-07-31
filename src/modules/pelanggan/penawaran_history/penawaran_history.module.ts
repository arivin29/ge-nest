import { PenawaranHistoryWidgetController } from './penawaran_history_widget.controller';
import { PenawaranHistoryWidgetService } from './penawaran_history_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenawaranHistoryService } from './penawaran_history.service';
import { PenawaranHistoryController } from './penawaran_history.controller';
import { PelangganPenawaranHistory } from 'src/entities/pelanggan';
import { PenawaranHistoryReportController } from './penawaran_history_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPenawaranHistory],'pelanggan')],
  controllers: [PenawaranHistoryController, PenawaranHistoryReportController, PenawaranHistoryWidgetController, PenawaranHistoryWidgetController],
  providers: [PenawaranHistoryService, PenawaranHistoryWidgetService, PenawaranHistoryWidgetService],
})
export class PenawaranHistoryModule {}
