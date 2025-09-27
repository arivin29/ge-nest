import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipeDto } from './new_bpt.sk_izin_sipe.dto';

export class NewBptSkIzinSipeWidgetDto extends NewBptSkIzinSipeDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
