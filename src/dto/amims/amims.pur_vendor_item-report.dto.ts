import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurVendorItemDto } from './amims.pur_vendor_item.dto';
import { AmimsMpartDto } from './amims.mpart.dto';

export class AmimsPurVendorItemReportDto extends AmimsPurVendorItemDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;
}
