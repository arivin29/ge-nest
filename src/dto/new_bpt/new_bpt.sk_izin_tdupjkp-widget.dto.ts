import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupjkpDto } from './new_bpt.sk_izin_tdupjkp.dto';

export class NewBptSkIzinTdupjkpWidgetDto extends NewBptSkIzinTdupjkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
