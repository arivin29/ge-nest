import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIptkmDto } from './new_bpt.onl_iptkm.dto';

export class NewBptOnlIptkmWidgetDto extends NewBptOnlIptkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
