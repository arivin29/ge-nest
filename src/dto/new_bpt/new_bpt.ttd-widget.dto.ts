import { ApiProperty } from '@nestjs/swagger';
import { NewBptTtdDto } from './new_bpt.ttd.dto';

export class NewBptTtdWidgetDto extends NewBptTtdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
