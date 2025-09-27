import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptpkDto } from './new_bpt.sk_izin_iptpk.dto';

export class NewBptSkIzinIptpkWidgetDto extends NewBptSkIzinIptpkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
