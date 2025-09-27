import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinPosisiDto } from './new_bpt.m_izin_posisi.dto';

export class NewBptMIzinPosisiWidgetDto extends NewBptMIzinPosisiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
