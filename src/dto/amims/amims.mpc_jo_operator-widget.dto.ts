import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcJoOperatorDto } from './amims.mpc_jo_operator.dto';

export class AmimsMpcJoOperatorWidgetDto extends AmimsMpcJoOperatorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
