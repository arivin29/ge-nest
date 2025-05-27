import { PartConditionWidgetController } from './part_condition_widget.controller';
import { PartConditionWidgetService } from './part_condition_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartConditionService } from './part_condition.service';
import { PartConditionController } from './part_condition.controller';
import { AmimsPartCondition } from 'src/entities/amims';
import { PartConditionReportController } from './part_condition_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartCondition],'amims')],
  controllers: [PartConditionController, PartConditionReportController, PartConditionWidgetController],
  providers: [PartConditionService, PartConditionWidgetService],
})
export class PartConditionModule {}
