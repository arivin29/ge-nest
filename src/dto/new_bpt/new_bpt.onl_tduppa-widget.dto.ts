import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTduppaDto } from './new_bpt.onl_tduppa.dto';

export class NewBptOnlTduppaWidgetDto extends NewBptOnlTduppaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
