import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIuppDto } from './new_bpt.sk_izin_iupp.dto';

export class NewBptSkIzinIuppWidgetDto extends NewBptSkIzinIuppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
