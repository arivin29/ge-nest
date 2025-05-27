import { TechLogJoWidgetController } from './tech_log_jo_widget.controller';
import { TechLogJoWidgetService } from './tech_log_jo_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechLogJoService } from './tech_log_jo.service';
import { TechLogJoController } from './tech_log_jo.controller';
import { AmimsTechLogJo } from 'src/entities/amims';
import { TechLogJoReportController } from './tech_log_jo_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsTechLogJo],'amims')],
  controllers: [TechLogJoController, TechLogJoReportController, TechLogJoWidgetController],
  providers: [TechLogJoService, TechLogJoWidgetService],
})
export class TechLogJoModule {}
