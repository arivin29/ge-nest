import { ClientSiteWidgetController } from './client_site_widget.controller';
import { ClientSiteWidgetService } from './client_site_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientSiteService } from './client_site.service';
import { ClientSiteController } from './client_site.controller';
import { PelangganClientSite } from 'src/entities/pelanggan';
import { ClientSiteReportController } from './client_site_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganClientSite],'pelanggan')],
  controllers: [ClientSiteController, ClientSiteReportController, ClientSiteWidgetController],
  providers: [ClientSiteService, ClientSiteWidgetService],
})
export class ClientSiteModule {}
