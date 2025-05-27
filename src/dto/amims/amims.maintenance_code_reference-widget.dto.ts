import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceCodeReferenceDto } from './amims.maintenance_code_reference.dto';

export class AmimsMaintenanceCodeReferenceWidgetDto extends AmimsMaintenanceCodeReferenceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
