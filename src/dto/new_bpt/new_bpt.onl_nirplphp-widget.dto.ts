import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirplphpDto } from './new_bpt.onl_nirplphp.dto';

export class NewBptOnlNirplphpWidgetDto extends NewBptOnlNirplphpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
