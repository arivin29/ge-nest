import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPoItemDto } from './amims.pur_po_item.dto';

export class AmimsPurPoItemWidgetDto extends AmimsPurPoItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
