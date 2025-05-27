import { RotaryFactorWidgetController } from './rotary_factor_widget.controller';
import { RotaryFactorWidgetService } from './rotary_factor_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RotaryFactorService } from './rotary_factor.service';
import { RotaryFactorController } from './rotary_factor.controller';
import { AmimsRotaryFactor } from 'src/entities/amims';
import { RotaryFactorReportController } from './rotary_factor_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsRotaryFactor],'amims')],
  controllers: [RotaryFactorController, RotaryFactorReportController, RotaryFactorWidgetController],
  providers: [RotaryFactorService, RotaryFactorWidgetService],
})
export class RotaryFactorModule {}
