import { ApiProperty } from '@nestjs/swagger';
import { NewBptMPengumumanDto } from './new_bpt.m_pengumuman.dto';

export class NewBptMPengumumanWidgetDto extends NewBptMPengumumanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
