import { MpcPiroItemWidgetController } from './mpc_piro_item_widget.controller';
import { MpcPiroItemWidgetService } from './mpc_piro_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MpcPiroItemService } from './mpc_piro_item.service';
import { MpcPiroItemController } from './mpc_piro_item.controller';
import { AmimsMpcPiroItem } from 'src/entities/amims';
import { MpcPiroItemReportController } from './mpc_piro_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMpcPiroItem],'amims')],
  controllers: [MpcPiroItemController, MpcPiroItemReportController, MpcPiroItemWidgetController],
  providers: [MpcPiroItemService, MpcPiroItemWidgetService],
})
export class MpcPiroItemModule {}
