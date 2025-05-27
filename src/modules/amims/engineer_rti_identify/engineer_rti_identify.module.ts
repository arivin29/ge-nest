import { EngineerRtiIdentifyWidgetController } from './engineer_rti_identify_widget.controller';
import { EngineerRtiIdentifyWidgetService } from './engineer_rti_identify_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerRtiIdentifyService } from './engineer_rti_identify.service';
import { EngineerRtiIdentifyController } from './engineer_rti_identify.controller';
import { AmimsEngineerRtiIdentify } from 'src/entities/amims';
import { EngineerRtiIdentifyReportController } from './engineer_rti_identify_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerRtiIdentify],'amims')],
  controllers: [EngineerRtiIdentifyController, EngineerRtiIdentifyReportController, EngineerRtiIdentifyWidgetController],
  providers: [EngineerRtiIdentifyService, EngineerRtiIdentifyWidgetService],
})
export class EngineerRtiIdentifyModule {}
