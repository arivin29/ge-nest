import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTpprDto } from './new_bpt.onl_tppr.dto';

export class NewBptOnlTpprWidgetDto extends NewBptOnlTpprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
