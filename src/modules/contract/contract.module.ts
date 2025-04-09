import { ContractWidgetController } from './contract_widget.controller';
import { ContractWidgetService } from './contract_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractService } from './contract.service';
import { ContractController } from './contract.controller';
import { Contract } from './entities/contract.entity';
import { ContractReportController } from './contract_report.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contract])],
  controllers: [ContractController, ContractReportController, ContractWidgetController],
  providers: [ContractService, ContractWidgetService],
})
export class ContractModule {}
