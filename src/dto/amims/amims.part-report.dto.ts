import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsWarrantyDto } from './amims.warranty.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';

export class AmimsPartReportDto extends AmimsPartDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsWarrantyDto })
  warranty: AmimsWarrantyDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;
}
