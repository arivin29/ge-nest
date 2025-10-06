import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramDocumentService } from './maintenance_program_document.service';
import { MaintenanceProgramDocumentController } from './maintenance_program_document.controller';
import { AmimsMaintenanceProgramDocument } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgramDocument],'amims')],
  controllers: [MaintenanceProgramDocumentController],
  providers: [MaintenanceProgramDocumentService],
})
export class MaintenanceProgramDocumentModule {}
