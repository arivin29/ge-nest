import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinSyaratBaruDto } from './new_bpt.m_izin_syarat_baru.dto';

export class NewBptMIzinSyaratBaruWidgetDto extends NewBptMIzinSyaratBaruDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
