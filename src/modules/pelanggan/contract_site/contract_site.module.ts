import { ContractSiteWidgetController } from './contract_site_widget.controller';
import { ContractSiteWidgetService } from './contract_site_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractSiteService } from './contract_site.service';
import { ContractSiteController } from './contract_site.controller';
import { PelangganContractSite } from 'src/entities/pelanggan';
import { ContractSiteReportController } from './contract_site_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContractSite],'pelanggan')],
  controllers: [ContractSiteController, ContractSiteReportController, ContractSiteWidgetController],
  providers: [ContractSiteService, ContractSiteWidgetService],
})
export class ContractSiteModule {}
