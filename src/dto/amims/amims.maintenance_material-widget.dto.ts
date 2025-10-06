import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceMaterialDto } from './amims.maintenance_material.dto';

export class AmimsMaintenanceMaterialWidgetDto extends AmimsMaintenanceMaterialDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
