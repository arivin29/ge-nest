import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOsspupeternakanDto } from './new_bpt.sk_izin_osspupeternakan.dto';

export class NewBptSkIzinOsspupeternakanWidgetDto extends NewBptSkIzinOsspupeternakanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
