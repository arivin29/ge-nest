import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIokopDto } from './new_bpt.onl_iokop.dto';

export class NewBptOnlIokopWidgetDto extends NewBptOnlIokopDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
