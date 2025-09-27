import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpbkrjDto } from './new_bpt.sk_izin_ipbkrj.dto';

export class NewBptSkIzinIpbkrjWidgetDto extends NewBptSkIzinIpbkrjDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
