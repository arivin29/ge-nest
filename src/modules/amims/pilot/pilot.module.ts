import { PilotWidgetController } from './pilot_widget.controller';
import { PilotWidgetService } from './pilot_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PilotService } from './pilot.service';
import { PilotController } from './pilot.controller';
import { AmimsPilot } from 'src/entities/amims';
import { PilotReportController } from './pilot_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPilot],'amims')],
  controllers: [PilotController, PilotReportController, PilotWidgetController],
  providers: [PilotService, PilotWidgetService],
})
export class PilotModule {}
