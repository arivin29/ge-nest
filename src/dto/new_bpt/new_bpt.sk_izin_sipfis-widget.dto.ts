import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipfisDto } from './new_bpt.sk_izin_sipfis.dto';

export class NewBptSkIzinSipfisWidgetDto extends NewBptSkIzinSipfisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
