import { LogProcessWidgetController } from './log_process_widget.controller';
import { LogProcessWidgetService } from './log_process_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogProcessService } from './log_process.service';
import { LogProcessController } from './log_process.controller';
import { AmimsLogProcess } from 'src/entities/amims';
import { LogProcessReportController } from './log_process_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLogProcess],'amims')],
  controllers: [LogProcessController, LogProcessReportController, LogProcessWidgetController],
  providers: [LogProcessService, LogProcessWidgetService],
})
export class LogProcessModule {}
