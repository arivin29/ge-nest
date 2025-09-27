import { ApiProperty } from '@nestjs/swagger';
import { NewBptDashboardDto } from './new_bpt.dashboard.dto';

export class NewBptDashboardWidgetDto extends NewBptDashboardDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
