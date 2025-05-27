import { TechLogWidgetController } from './tech_log_widget.controller';
import { TechLogWidgetService } from './tech_log_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechLogService } from './tech_log.service';
import { TechLogController } from './tech_log.controller';
import { AmimsTechLog } from 'src/entities/amims';
import { TechLogReportController } from './tech_log_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechLog],'amims')],
  controllers: [TechLogController, TechLogReportController, TechLogWidgetController],
  providers: [TechLogService, TechLogWidgetService],
})
export class TechLogModule {}
