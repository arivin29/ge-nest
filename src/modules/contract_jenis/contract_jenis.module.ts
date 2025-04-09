import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractJenisService } from './contract_jenis.service';
import { ContractJenisController } from './contract_jenis.controller';
import { ContractJenis } from './entities/contract_jenis.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContractJenis])],
  controllers: [ContractJenisController],
  providers: [ContractJenisService],
})
export class ContractJenisModule {}
