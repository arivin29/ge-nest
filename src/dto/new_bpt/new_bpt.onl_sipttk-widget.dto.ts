import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlSipttkDto } from './new_bpt.onl_sipttk.dto';

export class NewBptOnlSipttkWidgetDto extends NewBptOnlSipttkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
