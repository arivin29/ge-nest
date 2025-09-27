import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIbdDto } from './new_bpt.onl_ibd.dto';

export class NewBptOnlIbdWidgetDto extends NewBptOnlIbdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
