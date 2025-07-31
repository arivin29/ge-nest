import { PenawaranWidgetController } from './penawaran_widget.controller';
import { PenawaranWidgetService } from './penawaran_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PenawaranService } from './penawaran.service';
import { PenawaranController } from './penawaran.controller';
import { PelangganPenawaran } from 'src/entities/pelanggan';
import { PenawaranReportController } from './penawaran_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganPenawaran],'pelanggan')],
  controllers: [PenawaranController, PenawaranReportController, PenawaranWidgetController],
  providers: [PenawaranService, PenawaranWidgetService],
})
export class PenawaranModule {}
