import { LifeTimeLimitWidgetController } from './life_time_limit_widget.controller';
import { LifeTimeLimitWidgetService } from './life_time_limit_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LifeTimeLimitService } from './life_time_limit.service';
import { LifeTimeLimitController } from './life_time_limit.controller';
import { AmimsLifeTimeLimit } from 'src/entities/amims';
import { LifeTimeLimitReportController } from './life_time_limit_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsLifeTimeLimit],'amims')],
  controllers: [LifeTimeLimitController, LifeTimeLimitReportController, LifeTimeLimitWidgetController],
  providers: [LifeTimeLimitService, LifeTimeLimitWidgetService],
})
export class LifeTimeLimitModule {}
