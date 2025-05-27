import { BinWidgetController } from './bin_widget.controller';
import { BinWidgetService } from './bin_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BinService } from './bin.service';
import { BinController } from './bin.controller';
import { AmimsBin } from 'src/entities/amims';
import { BinReportController } from './bin_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsBin],'amims')],
  controllers: [BinController, BinReportController, BinWidgetController],
  providers: [BinService, BinWidgetService],
})
export class BinModule {}
