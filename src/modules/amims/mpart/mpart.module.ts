import { MpartWidgetController } from './mpart_widget.controller';
import { MpartWidgetService } from './mpart_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpartService } from './mpart.service';
import { MpartController } from './mpart.controller';
import { AmimsMpart } from 'src/entities/amims';
import { MpartReportController } from './mpart_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpart],'amims')],
  controllers: [MpartController, MpartReportController, MpartWidgetController],
  providers: [MpartService, MpartWidgetService],
})
export class MpartModule {}
