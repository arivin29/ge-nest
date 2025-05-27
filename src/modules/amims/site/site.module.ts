import { SiteWidgetController } from './site_widget.controller';
import { SiteWidgetService } from './site_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiteService } from './site.service';
import { SiteController } from './site.controller';
import { AmimsSite } from 'src/entities/amims';
import { SiteReportController } from './site_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsSite],'amims')],
  controllers: [SiteController, SiteReportController, SiteWidgetController],
  providers: [SiteService, SiteWidgetService],
})
export class SiteModule {}
