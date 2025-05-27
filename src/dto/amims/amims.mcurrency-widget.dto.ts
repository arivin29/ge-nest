import { ApiProperty } from '@nestjs/swagger';
import { AmimsMcurrencyDto } from './amims.mcurrency.dto';

export class AmimsMcurrencyWidgetDto extends AmimsMcurrencyDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
