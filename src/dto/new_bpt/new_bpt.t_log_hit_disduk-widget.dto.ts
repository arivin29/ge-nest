import { ApiProperty } from '@nestjs/swagger';
import { NewBptTLogHitDisdukDto } from './new_bpt.t_log_hit_disduk.dto';

export class NewBptTLogHitDisdukWidgetDto extends NewBptTLogHitDisdukDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
