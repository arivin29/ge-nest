import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractSiteService } from './contract_site.service';
import { ContractSiteController } from './contract_site.controller';
import { ContractSite } from './entities/contract_site.entity';
import { ContractSiteReportController } from './contract_site_report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContractSite])],
    controllers: [ContractSiteController, ContractSiteReportController],
  providers: [ContractSiteService],
})
export class ContractSiteModule {}
