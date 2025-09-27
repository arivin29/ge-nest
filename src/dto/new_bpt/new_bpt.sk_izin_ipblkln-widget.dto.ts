import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpblklnDto } from './new_bpt.sk_izin_ipblkln.dto';

export class NewBptSkIzinIpblklnWidgetDto extends NewBptSkIzinIpblklnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
