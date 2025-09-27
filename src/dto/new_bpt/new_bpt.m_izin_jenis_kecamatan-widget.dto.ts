import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisKecamatanDto } from './new_bpt.m_izin_jenis_kecamatan.dto';

export class NewBptMIzinJenisKecamatanWidgetDto extends NewBptMIzinJenisKecamatanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
