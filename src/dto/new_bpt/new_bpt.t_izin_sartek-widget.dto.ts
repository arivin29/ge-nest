import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinSartekDto } from './new_bpt.t_izin_sartek.dto';

export class NewBptTIzinSartekWidgetDto extends NewBptTIzinSartekDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
