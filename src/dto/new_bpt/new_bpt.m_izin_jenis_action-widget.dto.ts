import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinJenisActionDto } from './new_bpt.m_izin_jenis_action.dto';

export class NewBptMIzinJenisActionWidgetDto extends NewBptMIzinJenisActionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
