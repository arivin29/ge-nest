import { DueListWidgetController } from './due_list_widget.controller';
import { DueListWidgetService } from './due_list_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DueListService } from './due_list.service';
import { DueListController } from './due_list.controller';
import { AmimsDueList } from 'src/entities/amims';
import { DueListReportController } from './due_list_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsDueList],'amims')],
  controllers: [DueListController, DueListReportController, DueListWidgetController],
  providers: [DueListService, DueListWidgetService],
})
export class DueListModule {}
