import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRpiktDto } from './new_bpt.onl_rpikt.dto';

export class NewBptOnlRpiktWidgetDto extends NewBptOnlRpiktDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
