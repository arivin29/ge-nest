import { FakturWidgetController } from './faktur_widget.controller';
import { FakturWidgetService } from './faktur_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FakturService } from './faktur.service';
import { FakturController } from './faktur.controller';
import { PelangganFaktur } from 'src/entities/pelanggan';
import { FakturReportController } from './faktur_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganFaktur],'pelanggan')],
  controllers: [FakturController, FakturReportController, FakturWidgetController],
  providers: [FakturService, FakturWidgetService],
})
export class FakturModule {}
