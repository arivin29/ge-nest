import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinArsipDto } from './new_bpt.t_izin_arsip.dto';

export class NewBptTIzinArsipWidgetDto extends NewBptTIzinArsipDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
