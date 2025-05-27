import { ApiProperty } from '@nestjs/swagger';
import { AmimsCurrencyDto } from './amims.currency.dto';

export class AmimsCurrencyWidgetDto extends AmimsCurrencyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
