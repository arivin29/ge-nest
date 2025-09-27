import { ApiProperty } from '@nestjs/swagger';
import { NewBptTIzinBpnDto } from './new_bpt.t_izin_bpn.dto';

export class NewBptTIzinBpnWidgetDto extends NewBptTIzinBpnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
