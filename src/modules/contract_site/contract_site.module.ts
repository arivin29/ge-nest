import { ContractSiteWidgetController } from './contract_site_widget.controller';
import { ContractSiteWidgetService } from './contract_site_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractSiteService } from './contract_site.service';
import { ContractSiteController } from './contract_site.controller';
import { ContractSite } from './entities/contract_site.entity';
import { ContractSiteReportController } from './contract_site_report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContractSite])],
  controllers: [ContractSiteController, ContractSiteReportController, ContractSiteWidgetController],
  providers: [ContractSiteService, ContractSiteWidgetService],
})
export class ContractSiteModule {}
