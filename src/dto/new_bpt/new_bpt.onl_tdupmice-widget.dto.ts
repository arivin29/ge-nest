import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupmiceDto } from './new_bpt.onl_tdupmice.dto';

export class NewBptOnlTdupmiceWidgetDto extends NewBptOnlTdupmiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
