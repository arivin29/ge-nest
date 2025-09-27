import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSikpDto } from './new_bpt.onl_sikp.dto';

export class NewBptOnlSikpWidgetDto extends NewBptOnlSikpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
