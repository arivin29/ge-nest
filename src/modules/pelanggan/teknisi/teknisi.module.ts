import { TeknisiWidgetController } from './teknisi_widget.controller';
import { TeknisiWidgetService } from './teknisi_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeknisiService } from './teknisi.service';
import { TeknisiController } from './teknisi.controller';
import { PelangganTeknisi } from 'src/entities/pelanggan';
import { TeknisiReportController } from './teknisi_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganTeknisi],'pelanggan')],
  controllers: [TeknisiController, TeknisiReportController, TeknisiWidgetController],
  providers: [TeknisiService, TeknisiWidgetService],
})
export class TeknisiModule {}
