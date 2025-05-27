import { TdWidgetController } from './td_widget.controller';
import { TdWidgetService } from './td_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TdService } from './td.service';
import { TdController } from './td.controller';
import { AmimsTd } from 'src/entities/amims';
import { TdReportController } from './td_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTd],'amims')],
  controllers: [TdController, TdReportController, TdWidgetController],
  providers: [TdService, TdWidgetService],
})
export class TdModule {}
