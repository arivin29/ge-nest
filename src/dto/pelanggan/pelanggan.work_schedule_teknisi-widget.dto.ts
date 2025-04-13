import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleTeknisiDto } from './pelanggan.work_schedule_teknisi.dto';

export class PelangganWorkScheduleTeknisiWidgetDto extends PelangganWorkScheduleTeknisiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
