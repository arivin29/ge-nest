import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpetzenaDto } from './new_bpt.sk_izin_ipetzena.dto';

export class NewBptSkIzinIpetzenaWidgetDto extends NewBptSkIzinIpetzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
