import { ApiProperty } from '@nestjs/swagger';
import { AmimsInternalGrnItemDto } from './amims.internal_grn_item.dto';

export class AmimsInternalGrnItemWidgetDto extends AmimsInternalGrnItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
