import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuppengolahanDto } from './new_bpt.onl_iuppengolahan.dto';

export class NewBptOnlIuppengolahanWidgetDto extends NewBptOnlIuppengolahanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
