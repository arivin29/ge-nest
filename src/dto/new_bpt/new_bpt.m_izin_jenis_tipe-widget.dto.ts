import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisTipeDto } from './new_bpt.m_izin_jenis_tipe.dto';

export class NewBptMIzinJenisTipeWidgetDto extends NewBptMIzinJenisTipeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
