import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIprmDto } from './new_bpt.sk_izin_iprm.dto';

export class NewBptSkIzinIprmWidgetDto extends NewBptSkIzinIprmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
