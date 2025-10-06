import { ApiProperty } from '@nestjs/swagger';
import { AmimsUnscheduleMaintenanceDto } from './amims.unschedule_maintenance.dto';

export class AmimsUnscheduleMaintenanceWidgetDto extends AmimsUnscheduleMaintenanceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
