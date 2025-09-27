import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdupspaDto } from './new_bpt.onl_tdupspa.dto';

export class NewBptOnlTdupspaWidgetDto extends NewBptOnlTdupspaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
