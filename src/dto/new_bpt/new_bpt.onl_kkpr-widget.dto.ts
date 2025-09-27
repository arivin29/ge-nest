import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlKkprDto } from './new_bpt.onl_kkpr.dto';

export class NewBptOnlKkprWidgetDto extends NewBptOnlKkprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
