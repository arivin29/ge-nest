import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTduprhuDto } from './new_bpt.onl_tduprhu.dto';

export class NewBptOnlTduprhuWidgetDto extends NewBptOnlTduprhuDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
