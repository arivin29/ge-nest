import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpabuzenaDto } from './new_bpt.sk_izin_ipabuzena.dto';

export class NewBptSkIzinIpabuzenaWidgetDto extends NewBptSkIzinIpabuzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
