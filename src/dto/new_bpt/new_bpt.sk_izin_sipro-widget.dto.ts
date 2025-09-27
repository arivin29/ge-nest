import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiproDto } from './new_bpt.sk_izin_sipro.dto';

export class NewBptSkIzinSiproWidgetDto extends NewBptSkIzinSiproDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
