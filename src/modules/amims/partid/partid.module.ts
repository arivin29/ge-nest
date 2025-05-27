import { PartidWidgetController } from './partid_widget.controller';
import { PartidWidgetService } from './partid_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidService } from './partid.service';
import { PartidController } from './partid.controller';
import { AmimsPartid } from 'src/entities/amims';
import { PartidReportController } from './partid_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPartid],'amims')],
  controllers: [PartidController, PartidReportController, PartidWidgetController],
  providers: [PartidService, PartidWidgetService],
})
export class PartidModule {}
