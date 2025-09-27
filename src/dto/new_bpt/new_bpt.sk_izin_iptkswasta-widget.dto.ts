import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptkswastaDto } from './new_bpt.sk_izin_iptkswasta.dto';

export class NewBptSkIzinIptkswastaWidgetDto extends NewBptSkIzinIptkswastaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
