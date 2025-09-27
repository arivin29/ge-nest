import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIubudphorDto } from './new_bpt.onl_iubudphor.dto';

export class NewBptOnlIubudphorWidgetDto extends NewBptOnlIubudphorDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
