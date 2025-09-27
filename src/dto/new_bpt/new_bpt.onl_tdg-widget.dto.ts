import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlTdgDto } from './new_bpt.onl_tdg.dto';

export class NewBptOnlTdgWidgetDto extends NewBptOnlTdgDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
