import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupdtwDto } from './new_bpt.sk_izin_tdupdtw.dto';

export class NewBptSkIzinTdupdtwWidgetDto extends NewBptSkIzinTdupdtwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
