import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSippaDto } from './new_bpt.onl_sippa.dto';

export class NewBptOnlSippaWidgetDto extends NewBptOnlSippaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
