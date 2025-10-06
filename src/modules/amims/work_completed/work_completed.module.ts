import { WorkCompletedWidgetController } from './work_completed_widget.controller';
import { WorkCompletedWidgetService } from './work_completed_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkCompletedService } from './work_completed.service';
import { WorkCompletedController } from './work_completed.controller';
import { AmimsWorkCompleted } from 'src/entities/amims';
import { WorkCompletedReportController } from './work_completed_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsWorkCompleted],'amims')],
  controllers: [WorkCompletedController, WorkCompletedReportController, WorkCompletedWidgetController],
  providers: [WorkCompletedService, WorkCompletedWidgetService],
})
export class WorkCompletedModule {}
