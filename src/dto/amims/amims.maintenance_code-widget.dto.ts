import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceCodeDto } from './amims.maintenance_code.dto';

export class AmimsMaintenanceCodeWidgetDto extends AmimsMaintenanceCodeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
