import { TechLogEngineCheckWidgetController } from './tech_log_engine_check_widget.controller';
import { TechLogEngineCheckWidgetService } from './tech_log_engine_check_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechLogEngineCheckService } from './tech_log_engine_check.service';
import { TechLogEngineCheckController } from './tech_log_engine_check.controller';
import { AmimsTechLogEngineCheck } from 'src/entities/amims';
import { TechLogEngineCheckReportController } from './tech_log_engine_check_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechLogEngineCheck],'amims')],
  controllers: [TechLogEngineCheckController, TechLogEngineCheckReportController, TechLogEngineCheckWidgetController],
  providers: [TechLogEngineCheckService, TechLogEngineCheckWidgetService],
})
export class TechLogEngineCheckModule {}
