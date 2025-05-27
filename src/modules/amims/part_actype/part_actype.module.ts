import { PartActypeWidgetController } from './part_actype_widget.controller';
import { PartActypeWidgetService } from './part_actype_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartActypeService } from './part_actype.service';
import { PartActypeController } from './part_actype.controller';
import { AmimsPartActype } from 'src/entities/amims';
import { PartActypeReportController } from './part_actype_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartActype],'amims')],
  controllers: [PartActypeController, PartActypeReportController, PartActypeWidgetController],
  providers: [PartActypeService, PartActypeWidgetService],
})
export class PartActypeModule {}
