import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramTaskDto } from './amims.maintenance_program_task.dto';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';

export class AmimsMaintenanceProgramTaskReportDto extends AmimsMaintenanceProgramTaskDto {
  @ApiProperty({ type: AmimsMaintenanceDto })
  maintenance: AmimsMaintenanceDto;
}
