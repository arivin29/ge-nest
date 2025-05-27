import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceCodeReferenceService } from './maintenance_code_reference.service';
import { MaintenanceCodeReferenceController } from './maintenance_code_reference.controller';
import { AmimsMaintenanceCodeReference } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceCodeReference],'amims')],
  controllers: [MaintenanceCodeReferenceController],
  providers: [MaintenanceCodeReferenceService],
})
export class MaintenanceCodeReferenceModule {}
