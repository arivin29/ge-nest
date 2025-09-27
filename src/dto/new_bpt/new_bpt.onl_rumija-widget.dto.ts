import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRumijaDto } from './new_bpt.onl_rumija.dto';

export class NewBptOnlRumijaWidgetDto extends NewBptOnlRumijaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
