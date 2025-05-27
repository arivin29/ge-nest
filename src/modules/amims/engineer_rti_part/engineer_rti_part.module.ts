import { EngineerRtiPartWidgetController } from './engineer_rti_part_widget.controller';
import { EngineerRtiPartWidgetService } from './engineer_rti_part_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerRtiPartService } from './engineer_rti_part.service';
import { EngineerRtiPartController } from './engineer_rti_part.controller';
import { AmimsEngineerRtiPart } from 'src/entities/amims';
import { EngineerRtiPartReportController } from './engineer_rti_part_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerRtiPart],'amims')],
  controllers: [EngineerRtiPartController, EngineerRtiPartReportController, EngineerRtiPartWidgetController],
  providers: [EngineerRtiPartService, EngineerRtiPartWidgetService],
})
export class EngineerRtiPartModule {}
