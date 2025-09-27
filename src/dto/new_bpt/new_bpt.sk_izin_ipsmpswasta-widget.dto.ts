import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpsmpswastaDto } from './new_bpt.sk_izin_ipsmpswasta.dto';

export class NewBptSkIzinIpsmpswastaWidgetDto extends NewBptSkIzinIpsmpswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
