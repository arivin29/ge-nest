import { PartLogWidgetController } from './part_log_widget.controller';
import { PartLogWidgetService } from './part_log_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartLogService } from './part_log.service';
import { PartLogController } from './part_log.controller';
import { AmimsPartLog } from 'src/entities/amims';
import { PartLogReportController } from './part_log_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartLog],'amims')],
  controllers: [PartLogController, PartLogReportController, PartLogWidgetController],
  providers: [PartLogService, PartLogWidgetService],
})
export class PartLogModule {}
