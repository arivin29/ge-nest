import { WpJoWidgetController } from './wp_jo_widget.controller';
import { WpJoWidgetService } from './wp_jo_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WpJoService } from './wp_jo.service';
import { WpJoController } from './wp_jo.controller';
import { AmimsWpJo } from 'src/entities/amims';
import { WpJoReportController } from './wp_jo_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsWpJo],'amims')],
  controllers: [WpJoController, WpJoReportController, WpJoWidgetController],
  providers: [WpJoService, WpJoWidgetService],
})
export class WpJoModule {}
