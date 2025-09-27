import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlImrscdpDto } from './new_bpt.onl_imrscdp.dto';

export class NewBptOnlImrscdpWidgetDto extends NewBptOnlImrscdpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
