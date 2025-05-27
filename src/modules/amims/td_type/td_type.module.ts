import { TdTypeWidgetController } from './td_type_widget.controller';
import { TdTypeWidgetService } from './td_type_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TdTypeService } from './td_type.service';
import { TdTypeController } from './td_type.controller';
import { AmimsTdType } from 'src/entities/amims';
import { TdTypeReportController } from './td_type_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTdType],'amims')],
  controllers: [TdTypeController, TdTypeReportController, TdTypeWidgetController],
  providers: [TdTypeService, TdTypeWidgetService],
})
export class TdTypeModule {}
