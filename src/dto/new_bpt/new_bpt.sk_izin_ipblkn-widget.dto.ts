import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpblknDto } from './new_bpt.sk_izin_ipblkn.dto';

export class NewBptSkIzinIpblknWidgetDto extends NewBptSkIzinIpblknDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
