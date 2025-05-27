import { MpcGseWidgetController } from './mpc_gse_widget.controller';
import { MpcGseWidgetService } from './mpc_gse_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcGseService } from './mpc_gse.service';
import { MpcGseController } from './mpc_gse.controller';
import { AmimsMpcGse } from 'src/entities/amims';
import { MpcGseReportController } from './mpc_gse_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcGse],'amims')],
  controllers: [MpcGseController, MpcGseReportController, MpcGseWidgetController],
  providers: [MpcGseService, MpcGseWidgetService],
})
export class MpcGseModule {}
