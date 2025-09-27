import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpagDto } from './new_bpt.sk_izin_ipag.dto';

export class NewBptSkIzinIpagWidgetDto extends NewBptSkIzinIpagDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
