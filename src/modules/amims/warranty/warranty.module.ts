import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarrantyService } from './warranty.service';
import { WarrantyController } from './warranty.controller';
import { AmimsWarranty } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsWarranty],'amims')],
  controllers: [WarrantyController],
  providers: [WarrantyService],
})
export class WarrantyModule {}
