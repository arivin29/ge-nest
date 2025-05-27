import { ApiProperty } from '@nestjs/swagger';
import { AmimsTdRefDto } from './amims.td_ref.dto';

export class AmimsTdRefWidgetDto extends AmimsTdRefDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
