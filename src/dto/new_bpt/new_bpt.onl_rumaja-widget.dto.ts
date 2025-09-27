import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRumajaDto } from './new_bpt.onl_rumaja.dto';

export class NewBptOnlRumajaWidgetDto extends NewBptOnlRumajaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
