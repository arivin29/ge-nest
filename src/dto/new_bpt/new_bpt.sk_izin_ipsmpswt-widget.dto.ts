import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpsmpswtDto } from './new_bpt.sk_izin_ipsmpswt.dto';

export class NewBptSkIzinIpsmpswtWidgetDto extends NewBptSkIzinIpsmpswtDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
