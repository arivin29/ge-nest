import { MpcWpWidgetController } from './mpc_wp_widget.controller';
import { MpcWpWidgetService } from './mpc_wp_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcWpService } from './mpc_wp.service';
import { MpcWpController } from './mpc_wp.controller';
import { AmimsMpcWp } from 'src/entities/amims';
import { MpcWpReportController } from './mpc_wp_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcWp],'amims')],
  controllers: [MpcWpController, MpcWpReportController, MpcWpWidgetController],
  providers: [MpcWpService, MpcWpWidgetService],
})
export class MpcWpModule {}
