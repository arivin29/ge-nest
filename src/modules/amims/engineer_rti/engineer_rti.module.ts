import { EngineerRtiWidgetController } from './engineer_rti_widget.controller';
import { EngineerRtiWidgetService } from './engineer_rti_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerRtiService } from './engineer_rti.service';
import { EngineerRtiController } from './engineer_rti.controller';
import { AmimsEngineerRti } from 'src/entities/amims';
import { EngineerRtiReportController } from './engineer_rti_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerRti],'amims')],
  controllers: [EngineerRtiController, EngineerRtiReportController, EngineerRtiWidgetController],
  providers: [EngineerRtiService, EngineerRtiWidgetService],
})
export class EngineerRtiModule {}
