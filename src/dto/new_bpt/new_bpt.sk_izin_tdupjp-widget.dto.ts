import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupjpDto } from './new_bpt.sk_izin_tdupjp.dto';

export class NewBptSkIzinTdupjpWidgetDto extends NewBptSkIzinTdupjpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
