import { WpWidgetController } from './wp_widget.controller';
import { WpWidgetService } from './wp_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpService } from './wp.service';
import { WpController } from './wp.controller';
import { AmimsWp } from 'src/entities/amims';
import { WpReportController } from './wp_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsWp],'amims')],
  controllers: [WpController, WpReportController, WpWidgetController],
  providers: [WpService, WpWidgetService],
})
export class WpModule {}
