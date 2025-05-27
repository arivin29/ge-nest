import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsMpartWidgetDto extends AmimsMpartDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
