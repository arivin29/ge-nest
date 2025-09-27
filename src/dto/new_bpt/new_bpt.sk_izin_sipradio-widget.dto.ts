import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipradioDto } from './new_bpt.sk_izin_sipradio.dto';

export class NewBptSkIzinSipradioWidgetDto extends NewBptSkIzinSipradioDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
