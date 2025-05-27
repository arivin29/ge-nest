import { LogTsnTsoWidgetController } from './log_tsn_tso_widget.controller';
import { LogTsnTsoWidgetService } from './log_tsn_tso_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogTsnTsoService } from './log_tsn_tso.service';
import { LogTsnTsoController } from './log_tsn_tso.controller';
import { AmimsLogTsnTso } from 'src/entities/amims';
import { LogTsnTsoReportController } from './log_tsn_tso_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLogTsnTso],'amims')],
  controllers: [LogTsnTsoController, LogTsnTsoReportController, LogTsnTsoWidgetController],
  providers: [LogTsnTsoService, LogTsnTsoWidgetService],
})
export class LogTsnTsoModule {}
