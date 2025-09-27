import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinArsipLamaDto } from './new_bpt.t_izin_arsip_lama.dto';

export class NewBptTIzinArsipLamaWidgetDto extends NewBptTIzinArsipLamaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
