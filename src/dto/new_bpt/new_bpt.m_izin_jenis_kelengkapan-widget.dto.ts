import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisKelengkapanDto } from './new_bpt.m_izin_jenis_kelengkapan.dto';

export class NewBptMIzinJenisKelengkapanWidgetDto extends NewBptMIzinJenisKelengkapanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
