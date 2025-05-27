import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurVendorContactDto } from './amims.pur_vendor_contact.dto';

export class AmimsPurVendorContactWidgetDto extends AmimsPurVendorContactDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
