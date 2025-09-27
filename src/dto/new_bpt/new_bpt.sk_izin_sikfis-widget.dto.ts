import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSikfisDto } from './new_bpt.sk_izin_sikfis.dto';

export class NewBptSkIzinSikfisWidgetDto extends NewBptSkIzinSikfisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
