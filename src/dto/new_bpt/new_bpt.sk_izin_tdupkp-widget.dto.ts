import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupkpDto } from './new_bpt.sk_izin_tdupkp.dto';

export class NewBptSkIzinTdupkpWidgetDto extends NewBptSkIzinTdupkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
