import { PartWidgetController } from './part_widget.controller';
import { PartWidgetService } from './part_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartService } from './part.service';
import { PartController } from './part.controller';
import { AmimsPart } from 'src/entities/amims';
import { PartReportController } from './part_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPart],'amims')],
  controllers: [PartController, PartReportController, PartWidgetController],
  providers: [PartService, PartWidgetService],
})
export class PartModule {}
