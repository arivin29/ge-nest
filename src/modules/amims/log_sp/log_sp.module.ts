import { LogSpWidgetController } from './log_sp_widget.controller';
import { LogSpWidgetService } from './log_sp_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogSpService } from './log_sp.service';
import { LogSpController } from './log_sp.controller';
import { AmimsLogSp } from 'src/entities/amims';
import { LogSpReportController } from './log_sp_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLogSp],'amims')],
  controllers: [LogSpController, LogSpReportController, LogSpWidgetController],
  providers: [LogSpService, LogSpWidgetService],
})
export class LogSpModule {}
