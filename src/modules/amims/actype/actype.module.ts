import { ActypeWidgetController } from './actype_widget.controller';
import { ActypeWidgetService } from './actype_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActypeService } from './actype.service';
import { ActypeController } from './actype.controller';
import { AmimsActype } from 'src/entities/amims';
import { ActypeReportController } from './actype_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsActype],'amims')],
  controllers: [ActypeController, ActypeReportController, ActypeWidgetController],
  providers: [ActypeService, ActypeWidgetService],
})
export class ActypeModule {}
