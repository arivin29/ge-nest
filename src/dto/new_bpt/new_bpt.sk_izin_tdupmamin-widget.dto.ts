import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupmaminDto } from './new_bpt.sk_izin_tdupmamin.dto';

export class NewBptSkIzinTdupmaminWidgetDto extends NewBptSkIzinTdupmaminDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
