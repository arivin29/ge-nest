import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractJenisService } from './contract_jenis.service';
import { ContractJenisController } from './contract_jenis.controller';
import { PelangganContractJenis } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganContractJenis],'pelanggan')],
  controllers: [ContractJenisController],
  providers: [ContractJenisService],
})
export class ContractJenisModule {}
