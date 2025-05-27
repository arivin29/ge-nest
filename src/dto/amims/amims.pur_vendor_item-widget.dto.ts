import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurVendorItemDto } from './amims.pur_vendor_item.dto';

export class AmimsPurVendorItemWidgetDto extends AmimsPurVendorItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
