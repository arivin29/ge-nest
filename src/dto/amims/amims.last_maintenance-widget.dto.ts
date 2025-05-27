import { ApiProperty } from '@nestjs/swagger';
import { AmimsLastMaintenanceDto } from './amims.last_maintenance.dto';

export class AmimsLastMaintenanceWidgetDto extends AmimsLastMaintenanceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
