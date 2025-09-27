import { ApiProperty } from '@nestjs/swagger';
import { NewBptTUserAksesIzinJenisNakesDto } from './new_bpt.t_user_akses_izin_jenis_nakes.dto';

export class NewBptTUserAksesIzinJenisNakesWidgetDto extends NewBptTUserAksesIzinJenisNakesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
