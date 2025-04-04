import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractSiteServiceService } from './contract_site_service.service';
import { ContractSiteServiceController } from './contract_site_service.controller';
import { ContractSiteService } from './entities/contract_site_service.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContractSiteService])],
  controllers: [ContractSiteServiceController],
  providers: [ContractSiteServiceService],
})
export class ContractSiteServiceModule {}
