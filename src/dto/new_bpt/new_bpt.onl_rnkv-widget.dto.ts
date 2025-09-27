import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRnkvDto } from './new_bpt.onl_rnkv.dto';

export class NewBptOnlRnkvWidgetDto extends NewBptOnlRnkvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
