import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramMaterialService } from './maintenance_program_material.service';
import { MaintenanceProgramMaterialController } from './maintenance_program_material.controller';
import { AmimsMaintenanceProgramMaterial } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgramMaterial],'amims')],
  controllers: [MaintenanceProgramMaterialController],
  providers: [MaintenanceProgramMaterialService],
})
export class MaintenanceProgramMaterialModule {}
