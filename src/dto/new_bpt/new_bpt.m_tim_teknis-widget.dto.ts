import { ApiProperty } from '@nestjs/swagger';
import { NewBptMTimTeknisDto } from './new_bpt.m_tim_teknis.dto';

export class NewBptMTimTeknisWidgetDto extends NewBptMTimTeknisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
