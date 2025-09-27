import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTduppaDto } from './new_bpt.sk_izin_tduppa.dto';

export class NewBptSkIzinTduppaWidgetDto extends NewBptSkIzinTduppaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
