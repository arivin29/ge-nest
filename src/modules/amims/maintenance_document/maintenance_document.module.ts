import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceDocumentService } from './maintenance_document.service';
import { MaintenanceDocumentController } from './maintenance_document.controller';
import { AmimsMaintenanceDocument } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceDocument],'amims')],
  controllers: [MaintenanceDocumentController],
  providers: [MaintenanceDocumentService],
})
export class MaintenanceDocumentModule {}
