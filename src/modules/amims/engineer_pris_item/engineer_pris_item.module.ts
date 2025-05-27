import { EngineerPrisItemWidgetController } from './engineer_pris_item_widget.controller';
import { EngineerPrisItemWidgetService } from './engineer_pris_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPrisItemService } from './engineer_pris_item.service';
import { EngineerPrisItemController } from './engineer_pris_item.controller';
import { AmimsEngineerPrisItem } from 'src/entities/amims';
import { EngineerPrisItemReportController } from './engineer_pris_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPrisItem],'amims')],
  controllers: [EngineerPrisItemController, EngineerPrisItemReportController, EngineerPrisItemWidgetController],
  providers: [EngineerPrisItemService, EngineerPrisItemWidgetService],
})
export class EngineerPrisItemModule {}
