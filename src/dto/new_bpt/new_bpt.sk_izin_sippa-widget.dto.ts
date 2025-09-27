import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSippaDto } from './new_bpt.sk_izin_sippa.dto';

export class NewBptSkIzinSippaWidgetDto extends NewBptSkIzinSippaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
