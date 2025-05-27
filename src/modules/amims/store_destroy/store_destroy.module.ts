import { StoreDestroyWidgetController } from './store_destroy_widget.controller';
import { StoreDestroyWidgetService } from './store_destroy_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreDestroyService } from './store_destroy.service';
import { StoreDestroyController } from './store_destroy.controller';
import { AmimsStoreDestroy } from 'src/entities/amims';
import { StoreDestroyReportController } from './store_destroy_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsStoreDestroy],'amims')],
  controllers: [StoreDestroyController, StoreDestroyReportController, StoreDestroyWidgetController],
  providers: [StoreDestroyService, StoreDestroyWidgetService],
})
export class StoreDestroyModule {}
