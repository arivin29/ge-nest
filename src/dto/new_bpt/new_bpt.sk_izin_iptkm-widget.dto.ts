import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIptkmDto } from './new_bpt.sk_izin_iptkm.dto';

export class NewBptSkIzinIptkmWidgetDto extends NewBptSkIzinIptkmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
