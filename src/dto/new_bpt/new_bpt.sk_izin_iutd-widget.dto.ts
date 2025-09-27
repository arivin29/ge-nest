import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIutdDto } from './new_bpt.sk_izin_iutd.dto';

export class NewBptSkIzinIutdWidgetDto extends NewBptSkIzinIutdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
