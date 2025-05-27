import { EngineerPmtrWidgetController } from './engineer_pmtr_widget.controller';
import { EngineerPmtrWidgetService } from './engineer_pmtr_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPmtrService } from './engineer_pmtr.service';
import { EngineerPmtrController } from './engineer_pmtr.controller';
import { AmimsEngineerPmtr } from 'src/entities/amims';
import { EngineerPmtrReportController } from './engineer_pmtr_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPmtr],'amims')],
  controllers: [EngineerPmtrController, EngineerPmtrReportController, EngineerPmtrWidgetController],
  providers: [EngineerPmtrService, EngineerPmtrWidgetService],
})
export class EngineerPmtrModule {}
