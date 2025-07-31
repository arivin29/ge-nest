import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleBapDto } from './pelanggan.work_schedule_bap.dto';

export class PelangganWorkScheduleBapWidgetDto extends PelangganWorkScheduleBapDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
