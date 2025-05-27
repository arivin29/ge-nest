import { PartAtaWidgetController } from './part_ata_widget.controller';
import { PartAtaWidgetService } from './part_ata_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartAtaService } from './part_ata.service';
import { PartAtaController } from './part_ata.controller';
import { AmimsPartAta } from 'src/entities/amims';
import { PartAtaReportController } from './part_ata_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartAta],'amims')],
  controllers: [PartAtaController, PartAtaReportController, PartAtaWidgetController],
  providers: [PartAtaService, PartAtaWidgetService],
})
export class PartAtaModule {}
