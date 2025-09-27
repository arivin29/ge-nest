import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisNakesDto } from './new_bpt.m_izin_jenis_nakes.dto';

export class NewBptMIzinJenisNakesWidgetDto extends NewBptMIzinJenisNakesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
