import { ApiProperty } from '@nestjs/swagger';
import { NewBptTUserAksesIzinJenisDto } from './new_bpt.t_user_akses_izin_jenis.dto';

export class NewBptTUserAksesIzinJenisWidgetDto extends NewBptTUserAksesIzinJenisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
