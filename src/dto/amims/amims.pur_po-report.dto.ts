import { ApiProperty } from '@nestjs/swagger';
import { AmimsPurPoDto } from './amims.pur_po.dto';
import { AmimsSiteDto } from './amims.site.dto';
import { AmimsPositionDto } from './amims.position.dto';
import { AmimsCurrencyDto } from './amims.currency.dto';

export class AmimsPurPoReportDto extends AmimsPurPoDto {
  @ApiProperty({ type: AmimsSiteDto })
  site: AmimsSiteDto;

  @ApiProperty({ type: AmimsPositionDto })
  position: AmimsPositionDto;

  @ApiProperty({ type: AmimsCurrencyDto })
  currency: AmimsCurrencyDto;
}
