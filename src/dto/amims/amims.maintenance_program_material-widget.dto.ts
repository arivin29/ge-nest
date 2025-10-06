import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceProgramMaterialDto } from './amims.maintenance_program_material.dto';

export class AmimsMaintenanceProgramMaterialWidgetDto extends AmimsMaintenanceProgramMaterialDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
