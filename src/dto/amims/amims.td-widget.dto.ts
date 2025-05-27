import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdDto } from './amims.td.dto';

export class AmimsTdWidgetDto extends AmimsTdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
