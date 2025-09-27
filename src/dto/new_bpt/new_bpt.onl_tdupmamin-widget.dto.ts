import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupmaminDto } from './new_bpt.onl_tdupmamin.dto';

export class NewBptOnlTdupmaminWidgetDto extends NewBptOnlTdupmaminDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
