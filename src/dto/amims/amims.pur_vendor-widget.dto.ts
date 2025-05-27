import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurVendorDto } from './amims.pur_vendor.dto';

export class AmimsPurVendorWidgetDto extends AmimsPurVendorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
