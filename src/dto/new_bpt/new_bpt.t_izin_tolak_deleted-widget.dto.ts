import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinTolakDeletedDto } from './new_bpt.t_izin_tolak_deleted.dto';

export class NewBptTIzinTolakDeletedWidgetDto extends NewBptTIzinTolakDeletedDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
