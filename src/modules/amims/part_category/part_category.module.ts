import { PartCategoryWidgetController } from './part_category_widget.controller';
import { PartCategoryWidgetService } from './part_category_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartCategoryService } from './part_category.service';
import { PartCategoryController } from './part_category.controller';
import { AmimsPartCategory } from 'src/entities/amims';
import { PartCategoryReportController } from './part_category_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartCategory],'amims')],
  controllers: [PartCategoryController, PartCategoryReportController, PartCategoryWidgetController],
  providers: [PartCategoryService, PartCategoryWidgetService],
})
export class PartCategoryModule {}
