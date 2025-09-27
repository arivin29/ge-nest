import { ApiProperty } from '@nestjs/swagger';
import { NewBptLaporanDintekDto } from './new_bpt.laporan_dintek.dto';

export class NewBptLaporanDintekWidgetDto extends NewBptLaporanDintekDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
