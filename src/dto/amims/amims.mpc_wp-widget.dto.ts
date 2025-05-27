import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcWpDto } from './amims.mpc_wp.dto';

export class AmimsMpcWpWidgetDto extends AmimsMpcWpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
