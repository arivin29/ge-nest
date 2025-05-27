import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdTypeDto } from './amims.td_type.dto';

export class AmimsTdTypeWidgetDto extends AmimsTdTypeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
