import { EngineerPrisWidgetController } from './engineer_pris_widget.controller';
import { EngineerPrisWidgetService } from './engineer_pris_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPrisService } from './engineer_pris.service';
import { EngineerPrisController } from './engineer_pris.controller';
import { AmimsEngineerPris } from 'src/entities/amims';
import { EngineerPrisReportController } from './engineer_pris_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPris],'amims')],
  controllers: [EngineerPrisController, EngineerPrisReportController, EngineerPrisWidgetController],
  providers: [EngineerPrisService, EngineerPrisWidgetService],
})
export class EngineerPrisModule {}
