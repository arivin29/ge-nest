import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNipplhDto } from './new_bpt.onl_nipplh.dto';

export class NewBptOnlNipplhWidgetDto extends NewBptOnlNipplhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
