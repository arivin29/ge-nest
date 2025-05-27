import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtaService } from './ata.service';
import { AtaController } from './ata.controller';
import { AmimsAta } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsAta],'amims')],
  controllers: [AtaController],
  providers: [AtaService],
})
export class AtaModule {}
