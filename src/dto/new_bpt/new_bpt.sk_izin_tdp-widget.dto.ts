import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdpDto } from './new_bpt.sk_izin_tdp.dto';

export class NewBptSkIzinTdpWidgetDto extends NewBptSkIzinTdpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
