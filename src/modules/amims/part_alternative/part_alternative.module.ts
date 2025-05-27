import { PartAlternativeWidgetController } from './part_alternative_widget.controller';
import { PartAlternativeWidgetService } from './part_alternative_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartAlternativeService } from './part_alternative.service';
import { PartAlternativeController } from './part_alternative.controller';
import { AmimsPartAlternative } from 'src/entities/amims';
import { PartAlternativeReportController } from './part_alternative_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartAlternative],'amims')],
  controllers: [PartAlternativeController, PartAlternativeReportController, PartAlternativeWidgetController],
  providers: [PartAlternativeService, PartAlternativeWidgetService],
})
export class PartAlternativeModule {}
