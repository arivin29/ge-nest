import { ApiProperty } from '@nestjs/swagger';
import { NewBptMIzinActionDto } from './new_bpt.m_izin_action.dto';

export class NewBptMIzinActionWidgetDto extends NewBptMIzinActionDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
