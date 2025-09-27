import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinPemberitahuanDto } from './new_bpt.t_izin_pemberitahuan.dto';

export class NewBptTIzinPemberitahuanWidgetDto extends NewBptTIzinPemberitahuanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
