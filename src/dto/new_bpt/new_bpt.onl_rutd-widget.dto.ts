import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRutdDto } from './new_bpt.onl_rutd.dto';

export class NewBptOnlRutdWidgetDto extends NewBptOnlRutdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
