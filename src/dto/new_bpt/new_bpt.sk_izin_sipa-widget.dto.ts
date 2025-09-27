import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipaDto } from './new_bpt.sk_izin_sipa.dto';

export class NewBptSkIzinSipaWidgetDto extends NewBptSkIzinSipaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
