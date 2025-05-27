import { MpcPiroWidgetController } from './mpc_piro_widget.controller';
import { MpcPiroWidgetService } from './mpc_piro_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcPiroService } from './mpc_piro.service';
import { MpcPiroController } from './mpc_piro.controller';
import { AmimsMpcPiro } from 'src/entities/amims';
import { MpcPiroReportController } from './mpc_piro_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcPiro],'amims')],
  controllers: [MpcPiroController, MpcPiroReportController, MpcPiroWidgetController],
  providers: [MpcPiroService, MpcPiroWidgetService],
})
export class MpcPiroModule {}
