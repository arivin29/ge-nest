import { PartFigureIndexWidgetController } from './part_figure_index_widget.controller';
import { PartFigureIndexWidgetService } from './part_figure_index_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartFigureIndexService } from './part_figure_index.service';
import { PartFigureIndexController } from './part_figure_index.controller';
import { AmimsPartFigureIndex } from 'src/entities/amims';
import { PartFigureIndexReportController } from './part_figure_index_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartFigureIndex],'amims')],
  controllers: [PartFigureIndexController, PartFigureIndexReportController, PartFigureIndexWidgetController],
  providers: [PartFigureIndexService, PartFigureIndexWidgetService],
})
export class PartFigureIndexModule {}
