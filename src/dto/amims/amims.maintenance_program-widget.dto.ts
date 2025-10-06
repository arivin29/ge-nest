import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramDto } from './amims.maintenance_program.dto';

export class AmimsMaintenanceProgramWidgetDto extends AmimsMaintenanceProgramDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
