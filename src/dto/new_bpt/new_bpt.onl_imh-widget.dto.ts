import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImhDto } from './new_bpt.onl_imh.dto';

export class NewBptOnlImhWidgetDto extends NewBptOnlImhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
