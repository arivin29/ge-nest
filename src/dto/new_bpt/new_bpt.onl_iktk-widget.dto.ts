import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlIktkDto } from './new_bpt.onl_iktk.dto';

export class NewBptOnlIktkWidgetDto extends NewBptOnlIktkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
