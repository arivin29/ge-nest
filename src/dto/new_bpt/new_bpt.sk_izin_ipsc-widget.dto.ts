import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpscDto } from './new_bpt.sk_izin_ipsc.dto';

export class NewBptSkIzinIpscWidgetDto extends NewBptSkIzinIpscDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
