import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurGrnItemDto } from './amims.pur_grn_item.dto';

export class AmimsPurGrnItemWidgetDto extends AmimsPurGrnItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
