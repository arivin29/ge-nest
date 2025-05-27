import { ApiProperty } from '@nestjs/swagger';
import { AmimsMaintenanceCodeFormIssuedDto } from './amims.maintenance_code_form_issued.dto';

export class AmimsMaintenanceCodeFormIssuedWidgetDto extends AmimsMaintenanceCodeFormIssuedDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
