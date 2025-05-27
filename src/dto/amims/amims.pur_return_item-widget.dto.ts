import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurReturnItemDto } from './amims.pur_return_item.dto';

export class AmimsPurReturnItemWidgetDto extends AmimsPurReturnItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
