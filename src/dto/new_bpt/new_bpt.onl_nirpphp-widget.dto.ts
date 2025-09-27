import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirpphpDto } from './new_bpt.onl_nirpphp.dto';

export class NewBptOnlNirpphpWidgetDto extends NewBptOnlNirpphpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
