import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceCodeFormIssuedService } from './maintenance_code_form_issued.service';
import { MaintenanceCodeFormIssuedController } from './maintenance_code_form_issued.controller';
import { AmimsMaintenanceCodeFormIssued } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceCodeFormIssued],'amims')],
  controllers: [MaintenanceCodeFormIssuedController],
  providers: [MaintenanceCodeFormIssuedService],
})
export class MaintenanceCodeFormIssuedModule {}
