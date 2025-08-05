import { VDueListOutputWidgetController } from './v_due_list_output_widget.controller';
import { VDueListOutputWidgetService } from './v_due_list_output_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VDueListOutputService } from './v_due_list_output.service';
import { VDueListOutputController } from './v_due_list_output.controller';
import { AmimsVDueListOutput } from 'src/entities/amims';
import { VDueListOutputReportController } from './v_due_list_output_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsVDueListOutput],'amims')],
  controllers: [VDueListOutputController, VDueListOutputReportController, VDueListOutputWidgetController],
  providers: [VDueListOutputService, VDueListOutputWidgetService],
})
export class VDueListOutputModule {}
