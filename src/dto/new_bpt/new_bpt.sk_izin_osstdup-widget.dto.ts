import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsstdupDto } from './new_bpt.sk_izin_osstdup.dto';

export class NewBptSkIzinOsstdupWidgetDto extends NewBptSkIzinOsstdupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
