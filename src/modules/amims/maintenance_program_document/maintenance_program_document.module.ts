import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramDocumentService } from './maintenance_program_document.service';
import { MaintenanceProgramDocumentController } from './maintenance_program_document.controller';
import { AmimsMaintenanceProgramItem } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgramItem], 'amims')],
  controllers: [MaintenanceProgramDocumentController],
  providers: [MaintenanceProgramDocumentService],
})
export class MaintenanceProgramDocumentModule {}
