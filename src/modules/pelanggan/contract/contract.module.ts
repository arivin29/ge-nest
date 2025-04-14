import { ContractWidgetController } from './contract_widget.controller';
import { ContractWidgetService } from './contract_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { PelangganContract } from 'src/entities/pelanggan';
import { ContractReportController } from './contract_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContract],'pelanggan')],
  controllers: [ContractController, ContractReportController, ContractWidgetController, ContractWidgetController],
  providers: [ContractService, ContractWidgetService, ContractWidgetService],
})
export class ContractModule {}
