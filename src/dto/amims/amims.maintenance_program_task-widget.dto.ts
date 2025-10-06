import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramTaskDto } from './amims.maintenance_program_task.dto';

export class AmimsMaintenanceProgramTaskWidgetDto extends AmimsMaintenanceProgramTaskDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
