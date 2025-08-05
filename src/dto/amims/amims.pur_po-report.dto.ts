import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPoDto } from './amims.pur_po.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';
import { AmimsPositionDto } from './amims.position.dto';
import { AmimsSiteDto } from './amims.site.dto';

export class AmimsPurPoReportDto extends AmimsPurPoDto {
  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;

  @ApiProperty({ type: AmimsPositionDto })
  position: AmimsPositionDto;

  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;
}
