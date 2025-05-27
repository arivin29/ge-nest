import { ApiProperty } from '@nestjs/swagger';
import { AmimsCurrencyDto } from './amims.currency.dto';
import { AmimsMcurrencyDto } from './amims.mcurrency.dto';

export class AmimsCurrencyReportDto extends AmimsCurrencyDto {
  @ApiProperty({ type: AmimsMcurrencyDto })
  mcurrency: AmimsMcurrencyDto;
}
