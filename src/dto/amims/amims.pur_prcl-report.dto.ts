import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPrclDto } from './amims.pur_prcl.dto';
import { AmimsMpartDto } from './amims.mpart.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';
import { AmimsPartDto } from './amims.part.dto';

export class AmimsPurPrclReportDto extends AmimsPurPrclDto {
  @ApiProperty({ type: AmimsMpartDto })
  mpart: AmimsMpartDto;

  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;

  @ApiProperty({ type: AmimsPartDto })
  part: AmimsPartDto;
}
