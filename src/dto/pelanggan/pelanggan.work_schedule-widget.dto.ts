import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleDto } from './pelanggan.work_schedule.dto';

export class PelangganWorkScheduleWidgetDto extends PelangganWorkScheduleDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
