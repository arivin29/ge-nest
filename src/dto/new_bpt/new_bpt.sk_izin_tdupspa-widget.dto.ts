import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdupspaDto } from './new_bpt.sk_izin_tdupspa.dto';

export class NewBptSkIzinTdupspaWidgetDto extends NewBptSkIzinTdupspaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
