import { MpcJoWidgetController } from './mpc_jo_widget.controller';
import { MpcJoWidgetService } from './mpc_jo_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcJoService } from './mpc_jo.service';
import { MpcJoController } from './mpc_jo.controller';
import { AmimsMpcJo } from 'src/entities/amims';
import { MpcJoReportController } from './mpc_jo_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcJo],'amims')],
  controllers: [MpcJoController, MpcJoReportController, MpcJoWidgetController],
  providers: [MpcJoService, MpcJoWidgetService],
})
export class MpcJoModule {}
