import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptkesDto } from './new_bpt.sk_izin_iptkes.dto';

export class NewBptSkIzinIptkesWidgetDto extends NewBptSkIzinIptkesDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
