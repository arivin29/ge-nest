import { PurReturnItemWidgetController } from './pur_return_item_widget.controller';
import { PurReturnItemWidgetService } from './pur_return_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurReturnItemService } from './pur_return_item.service';
import { PurReturnItemController } from './pur_return_item.controller';
import { AmimsPurReturnItem } from 'src/entities/amims';
import { PurReturnItemReportController } from './pur_return_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsPurReturnItem],'amims')],
  controllers: [PurReturnItemController, PurReturnItemReportController, PurReturnItemWidgetController],
  providers: [PurReturnItemService, PurReturnItemWidgetService],
})
export class PurReturnItemModule {}
