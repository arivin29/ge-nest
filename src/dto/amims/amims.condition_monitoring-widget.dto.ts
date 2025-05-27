import { ApiProperty } from '@nestjs/swagger';
import { AmimsConditionMonitoringDto } from './amims.condition_monitoring.dto';

export class AmimsConditionMonitoringWidgetDto extends AmimsConditionMonitoringDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
