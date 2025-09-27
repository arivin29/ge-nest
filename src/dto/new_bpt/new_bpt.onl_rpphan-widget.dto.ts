import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRpphanDto } from './new_bpt.onl_rpphan.dto';

export class NewBptOnlRpphanWidgetDto extends NewBptOnlRpphanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
