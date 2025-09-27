import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipotDto } from './new_bpt.sk_izin_sipot.dto';

export class NewBptSkIzinSipotWidgetDto extends NewBptSkIzinSipotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
