import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceDto } from './amims.maintenance.dto';

export class AmimsMaintenanceWidgetDto extends AmimsMaintenanceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
