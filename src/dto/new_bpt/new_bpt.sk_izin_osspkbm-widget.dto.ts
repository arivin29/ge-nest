import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsspkbmDto } from './new_bpt.sk_izin_osspkbm.dto';

export class NewBptSkIzinOsspkbmWidgetDto extends NewBptSkIzinOsspkbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
