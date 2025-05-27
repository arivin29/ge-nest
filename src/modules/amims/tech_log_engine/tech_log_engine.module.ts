import { TechLogEngineWidgetController } from './tech_log_engine_widget.controller';
import { TechLogEngineWidgetService } from './tech_log_engine_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechLogEngineService } from './tech_log_engine.service';
import { TechLogEngineController } from './tech_log_engine.controller';
import { AmimsTechLogEngine } from 'src/entities/amims';
import { TechLogEngineReportController } from './tech_log_engine_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechLogEngine],'amims')],
  controllers: [TechLogEngineController, TechLogEngineReportController, TechLogEngineWidgetController],
  providers: [TechLogEngineService, TechLogEngineWidgetService],
})
export class TechLogEngineModule {}
