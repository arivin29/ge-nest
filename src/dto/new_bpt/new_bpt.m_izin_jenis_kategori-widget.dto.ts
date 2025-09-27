import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisKategoriDto } from './new_bpt.m_izin_jenis_kategori.dto';

export class NewBptMIzinJenisKategoriWidgetDto extends NewBptMIzinJenisKategoriDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
