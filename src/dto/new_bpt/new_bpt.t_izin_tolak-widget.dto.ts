import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinTolakDto } from './new_bpt.t_izin_tolak.dto';

export class NewBptTIzinTolakWidgetDto extends NewBptTIzinTolakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
