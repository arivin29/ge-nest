import { EngineerPrisReturnWidgetController } from './engineer_pris_return_widget.controller';
import { EngineerPrisReturnWidgetService } from './engineer_pris_return_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPrisReturnService } from './engineer_pris_return.service';
import { EngineerPrisReturnController } from './engineer_pris_return.controller';
import { AmimsEngineerPrisReturn } from 'src/entities/amims';
import { EngineerPrisReturnReportController } from './engineer_pris_return_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPrisReturn],'amims')],
  controllers: [EngineerPrisReturnController, EngineerPrisReturnReportController, EngineerPrisReturnWidgetController],
  providers: [EngineerPrisReturnService, EngineerPrisReturnWidgetService],
})
export class EngineerPrisReturnModule {}
