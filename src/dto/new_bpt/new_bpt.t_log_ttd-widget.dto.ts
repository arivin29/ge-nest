import { ApiProperty } from '@nestjs/swagger';
import { NewBptTLogTtdDto } from './new_bpt.t_log_ttd.dto';

export class NewBptTLogTtdWidgetDto extends NewBptTLogTtdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
