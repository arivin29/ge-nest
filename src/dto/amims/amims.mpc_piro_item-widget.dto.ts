import { ApiProperty } from '@nestjs/swagger';
import { AmimsMpcPiroItemDto } from './amims.mpc_piro_item.dto';

export class AmimsMpcPiroItemWidgetDto extends AmimsMpcPiroItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
