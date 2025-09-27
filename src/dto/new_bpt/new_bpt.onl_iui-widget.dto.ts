import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIuiDto } from './new_bpt.onl_iui.dto';

export class NewBptOnlIuiWidgetDto extends NewBptOnlIuiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
