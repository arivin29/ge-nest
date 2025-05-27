import { StockWidgetController } from './stock_widget.controller';
import { StockWidgetService } from './stock_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { AmimsStock } from 'src/entities/amims';
import { StockReportController } from './stock_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsStock],'amims')],
  controllers: [StockController, StockReportController, StockWidgetController],
  providers: [StockService, StockWidgetService],
})
export class StockModule {}
