import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuppDto } from './new_bpt.onl_iupp.dto';

export class NewBptOnlIuppWidgetDto extends NewBptOnlIuppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
