import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcPiroDto } from './amims.mpc_piro.dto';

export class AmimsMpcPiroWidgetDto extends AmimsMpcPiroDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
