import { ApiProperty } from '@nestjs/swagger';
import { NewBptTPerusahaanKegiatanDto } from './new_bpt.t_perusahaan_kegiatan.dto';

export class NewBptTPerusahaanKegiatanWidgetDto extends NewBptTPerusahaanKegiatanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
