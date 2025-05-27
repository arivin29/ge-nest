import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleBapItemDto } from './pelanggan.work_schedule_bap_item.dto';

export class PelangganWorkScheduleBapItemWidgetDto extends PelangganWorkScheduleBapItemDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
