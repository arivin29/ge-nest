import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIupeternakanDto } from './new_bpt.onl_iupeternakan.dto';

export class NewBptOnlIupeternakanWidgetDto extends NewBptOnlIupeternakanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
