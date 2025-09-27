import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpsdswastaDto } from './new_bpt.sk_izin_ipsdswasta.dto';

export class NewBptSkIzinIpsdswastaWidgetDto extends NewBptSkIzinIpsdswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
