import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlItkhwnaDto } from './new_bpt.onl_itkhwna.dto';

export class NewBptOnlItkhwnaWidgetDto extends NewBptOnlItkhwnaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
