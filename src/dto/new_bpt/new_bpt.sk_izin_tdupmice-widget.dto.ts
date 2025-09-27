import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupmiceDto } from './new_bpt.sk_izin_tdupmice.dto';

export class NewBptSkIzinTdupmiceWidgetDto extends NewBptSkIzinTdupmiceDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
