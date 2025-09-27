import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpkapDto } from './new_bpt.sk_izin_ipkap.dto';

export class NewBptSkIzinIpkapWidgetDto extends NewBptSkIzinIpkapDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
