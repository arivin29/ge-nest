import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceCodeService } from './maintenance_code.service';
import { MaintenanceCodeController } from './maintenance_code.controller';
import { AmimsMaintenanceCode } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceCode],'amims')],
  controllers: [MaintenanceCodeController],
  providers: [MaintenanceCodeService],
})
export class MaintenanceCodeModule {}
