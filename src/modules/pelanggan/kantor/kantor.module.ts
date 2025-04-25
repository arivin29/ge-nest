import { KantorWidgetController } from './kantor_widget.controller';
import { KantorWidgetService } from './kantor_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KantorService } from './kantor.service';
import { KantorController } from './kantor.controller';
import { PelangganKantor } from 'src/entities/pelanggan';
import { KantorReportController } from './kantor_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganKantor],'pelanggan')],
  controllers: [KantorController, KantorReportController, KantorWidgetController],
  providers: [KantorService, KantorWidgetService],
})
export class KantorModule {}
