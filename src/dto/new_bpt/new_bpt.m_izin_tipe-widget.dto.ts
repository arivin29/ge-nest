import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinTipeDto } from './new_bpt.m_izin_tipe.dto';

export class NewBptMIzinTipeWidgetDto extends NewBptMIzinTipeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
