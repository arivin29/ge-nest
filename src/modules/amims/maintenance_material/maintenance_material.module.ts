import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceMaterialService } from './maintenance_material.service';
import { MaintenanceMaterialController } from './maintenance_material.controller';
import { AmimsMaintenanceMaterial } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceMaterial],'amims')],
  controllers: [MaintenanceMaterialController],
  providers: [MaintenanceMaterialService],
})
export class MaintenanceMaterialModule {}
