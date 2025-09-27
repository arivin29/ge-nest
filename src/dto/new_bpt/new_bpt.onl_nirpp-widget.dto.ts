import { ApiProperty } from '@nestjs/swagger';
import { NewBptOnlNirppDto } from './new_bpt.onl_nirpp.dto';

export class NewBptOnlNirppWidgetDto extends NewBptOnlNirppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
