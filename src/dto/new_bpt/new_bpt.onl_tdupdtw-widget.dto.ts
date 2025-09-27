import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupdtwDto } from './new_bpt.onl_tdupdtw.dto';

export class NewBptOnlTdupdtwWidgetDto extends NewBptOnlTdupdtwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
