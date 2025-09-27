import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIutdDto } from './new_bpt.onl_iutd.dto';

export class NewBptOnlIutdWidgetDto extends NewBptOnlIutdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
