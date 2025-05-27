import { CurrencyWidgetController } from './currency_widget.controller';
import { CurrencyWidgetService } from './currency_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { AmimsCurrency } from 'src/entities/amims';
import { CurrencyReportController } from './currency_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsCurrency],'amims')],
  controllers: [CurrencyController, CurrencyReportController, CurrencyWidgetController],
  providers: [CurrencyService, CurrencyWidgetService],
})
export class CurrencyModule {}
