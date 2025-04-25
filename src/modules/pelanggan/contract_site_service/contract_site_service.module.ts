import { ContractSiteServiceWidgetController } from './contract_site_service_widget.controller';
import { ContractSiteServiceWidgetService } from './contract_site_service_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractSiteServiceService } from './contract_site_service.service';
import { ContractSiteServiceController } from './contract_site_service.controller';
import { PelangganContractSiteService } from 'src/entities/pelanggan';
import { ContractSiteServiceReportController } from './contract_site_service_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContractSiteService],'pelanggan')],
  controllers: [ContractSiteServiceController, ContractSiteServiceReportController, ContractSiteServiceWidgetController],
  providers: [ContractSiteServiceService, ContractSiteServiceWidgetService],
})
export class ContractSiteServiceModule {}
