import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptkrkDto } from './new_bpt.sk_izin_siptkrk.dto';

export class NewBptSkIzinSiptkrkWidgetDto extends NewBptSkIzinSiptkrkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
