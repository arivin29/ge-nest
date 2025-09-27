import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisTipeBaruDto } from './new_bpt.m_izin_jenis_tipe_baru.dto';

export class NewBptMIzinJenisTipeBaruWidgetDto extends NewBptMIzinJenisTipeBaruDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
