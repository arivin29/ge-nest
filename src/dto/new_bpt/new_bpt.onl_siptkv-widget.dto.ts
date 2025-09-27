import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSiptkvDto } from './new_bpt.onl_siptkv.dto';

export class NewBptOnlSiptkvWidgetDto extends NewBptOnlSiptkvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
