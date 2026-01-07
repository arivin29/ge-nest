import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramItemDto } from './amims.maintenance_program_item.dto';

export class AmimsMaintenanceProgramItemWidgetDto extends AmimsMaintenanceProgramItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
