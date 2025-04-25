import { ContractJenisWidgetController } from './contract_jenis_widget.controller';
import { ContractJenisWidgetService } from './contract_jenis_widget.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractJenisService } from './contract_jenis.service';
import { ContractJenisController } from './contract_jenis.controller';
import { PelangganContractJenis } from 'src/entities/pelanggan';
import { ContractJenisReportController } from './contract_jenis_report.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContractJenis],'pelanggan')],
  controllers: [ContractJenisController, ContractJenisReportController, ContractJenisWidgetController],
  providers: [ContractJenisService, ContractJenisWidgetService],
})
export class ContractJenisModule {}
