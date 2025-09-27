import { ApiProperty } from '@nestjs/swagger';
import { NewBptLaporanKecamatanDto } from './new_bpt.laporan_kecamatan.dto';

export class NewBptLaporanKecamatanWidgetDto extends NewBptLaporanKecamatanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
