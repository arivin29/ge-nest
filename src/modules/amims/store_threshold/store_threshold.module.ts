import { StoreThresholdWidgetController } from './store_threshold_widget.controller';
import { StoreThresholdWidgetService } from './store_threshold_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreThresholdService } from './store_threshold.service';
import { StoreThresholdController } from './store_threshold.controller';
import { AmimsStoreThreshold } from 'src/entities/amims';
import { StoreThresholdReportController } from './store_threshold_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsStoreThreshold],'amims')],
  controllers: [StoreThresholdController, StoreThresholdReportController, StoreThresholdWidgetController],
  providers: [StoreThresholdService, StoreThresholdWidgetService],
})
export class StoreThresholdModule {}
