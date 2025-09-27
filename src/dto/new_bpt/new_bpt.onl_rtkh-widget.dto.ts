import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlRtkhDto } from './new_bpt.onl_rtkh.dto';

export class NewBptOnlRtkhWidgetDto extends NewBptOnlRtkhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
