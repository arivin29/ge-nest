import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupjipDto } from './new_bpt.sk_izin_tdupjip.dto';

export class NewBptSkIzinTdupjipWidgetDto extends NewBptSkIzinTdupjipDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
