import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrclDto } from './amims.pur_prcl.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPurPrclReportDto extends AmimsPurPrclDto {
  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;

  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
