import { ApiProperty } from '@nestjs/swagger';
import { NewBptTLogGuestDto } from './new_bpt.t_log_guest.dto';

export class NewBptTLogGuestWidgetDto extends NewBptTLogGuestDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
