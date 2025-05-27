import { DueListOutputWidgetController } from './due_list_output_widget.controller';
import { DueListOutputWidgetService } from './due_list_output_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DueListOutputService } from './due_list_output.service';
import { DueListOutputController } from './due_list_output.controller';
import { AmimsDueListOutput } from 'src/entities/amims';
import { DueListOutputReportController } from './due_list_output_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsDueListOutput],'amims')],
  controllers: [DueListOutputController, DueListOutputReportController, DueListOutputWidgetController],
  providers: [DueListOutputService, DueListOutputWidgetService],
})
export class DueListOutputModule {}
