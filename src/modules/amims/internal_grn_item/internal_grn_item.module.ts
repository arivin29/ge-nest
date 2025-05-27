import { InternalGrnItemWidgetController } from './internal_grn_item_widget.controller';
import { InternalGrnItemWidgetService } from './internal_grn_item_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InternalGrnItemService } from './internal_grn_item.service';
import { InternalGrnItemController } from './internal_grn_item.controller';
import { AmimsInternalGrnItem } from 'src/entities/amims';
import { InternalGrnItemReportController } from './internal_grn_item_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsInternalGrnItem],'amims')],
  controllers: [InternalGrnItemController, InternalGrnItemReportController, InternalGrnItemWidgetController],
  providers: [InternalGrnItemService, InternalGrnItemWidgetService],
})
export class InternalGrnItemModule {}
