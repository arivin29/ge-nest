import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTduppwDto } from './new_bpt.onl_tduppw.dto';

export class NewBptOnlTduppwWidgetDto extends NewBptOnlTduppwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
