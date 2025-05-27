import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcSelfMaintenanceDto } from './amims.mpc_self_maintenance.dto';

export class AmimsMpcSelfMaintenanceWidgetDto extends AmimsMpcSelfMaintenanceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
