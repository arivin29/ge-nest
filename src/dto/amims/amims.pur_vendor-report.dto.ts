import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurVendorDto } from './amims.pur_vendor.dto';
import { AmimsMcurrencyDto } from './amims.mcurrency.dto';

export class AmimsPurVendorReportDto extends AmimsPurVendorDto {
  @ApiProperty({ type: AmimsMcurrencyDto })
  mcurrency: AmimsMcurrencyDto;
}
