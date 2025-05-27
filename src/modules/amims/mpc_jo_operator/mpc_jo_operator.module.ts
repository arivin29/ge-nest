import { MpcJoOperatorWidgetController } from './mpc_jo_operator_widget.controller';
import { MpcJoOperatorWidgetService } from './mpc_jo_operator_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcJoOperatorService } from './mpc_jo_operator.service';
import { MpcJoOperatorController } from './mpc_jo_operator.controller';
import { AmimsMpcJoOperator } from 'src/entities/amims';
import { MpcJoOperatorReportController } from './mpc_jo_operator_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcJoOperator],'amims')],
  controllers: [MpcJoOperatorController, MpcJoOperatorReportController, MpcJoOperatorWidgetController],
  providers: [MpcJoOperatorService, MpcJoOperatorWidgetService],
})
export class MpcJoOperatorModule {}
