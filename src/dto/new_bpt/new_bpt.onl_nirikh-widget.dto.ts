import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirikhDto } from './new_bpt.onl_nirikh.dto';

export class NewBptOnlNirikhWidgetDto extends NewBptOnlNirikhDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
