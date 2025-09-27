import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIprDto } from './new_bpt.onl_ipr.dto';

export class NewBptOnlIprWidgetDto extends NewBptOnlIprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
