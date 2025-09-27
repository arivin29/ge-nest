import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisDto } from './new_bpt.m_izin_jenis.dto';

export class NewBptMIzinJenisWidgetDto extends NewBptMIzinJenisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
