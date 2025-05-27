import { EngineerPrisReturnItemWidgetController } from './engineer_pris_return_item_widget.controller';
import { EngineerPrisReturnItemWidgetService } from './engineer_pris_return_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EngineerPrisReturnItemService } from './engineer_pris_return_item.service';
import { EngineerPrisReturnItemController } from './engineer_pris_return_item.controller';
import { AmimsEngineerPrisReturnItem } from 'src/entities/amims';
import { EngineerPrisReturnItemReportController } from './engineer_pris_return_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsEngineerPrisReturnItem],'amims')],
  controllers: [EngineerPrisReturnItemController, EngineerPrisReturnItemReportController, EngineerPrisReturnItemWidgetController],
  providers: [EngineerPrisReturnItemService, EngineerPrisReturnItemWidgetService],
})
export class EngineerPrisReturnItemModule {}
