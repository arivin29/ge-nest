import { ApiProperty } from '@nestjs/swagger';
import { AmimsPartDto } from './amims.part.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsWarrantyDto } from './amims.warranty.dto';

export class AmimsPartReportDto extends AmimsPartDto {
  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsWarrantyDto })
  warranty: AmimsWarrantyDto;
}
