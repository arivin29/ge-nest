import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcJoDto } from './amims.mpc_jo.dto';

export class AmimsMpcJoWidgetDto extends AmimsMpcJoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
