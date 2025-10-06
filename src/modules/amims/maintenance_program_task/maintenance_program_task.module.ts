import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceProgramTaskService } from './maintenance_program_task.service';
import { MaintenanceProgramTaskController } from './maintenance_program_task.controller';
import { AmimsMaintenanceProgramTask } from 'src/entities/amims';
 
@Module({
  imports: [TypeOrmModule.forFeature([AmimsMaintenanceProgramTask],'amims')],
  controllers: [MaintenanceProgramTaskController],
  providers: [MaintenanceProgramTaskService],
})
export class MaintenanceProgramTaskModule {}
