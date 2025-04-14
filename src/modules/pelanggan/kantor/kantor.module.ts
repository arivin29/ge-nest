import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KantorService } from './kantor.service';
import { KantorController } from './kantor.controller';
import { PelangganKantor } from 'src/entities/pelanggan';
 
@Module({
  imports: [TypeOrmModule.forFeature([PelangganKantor],'pelanggan')],
  controllers: [KantorController],
  providers: [KantorService],
})
export class KantorModule {}
