import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpkuburDto } from './new_bpt.sk_izin_ipkubur.dto';

export class NewBptSkIzinIpkuburWidgetDto extends NewBptSkIzinIpkuburDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
