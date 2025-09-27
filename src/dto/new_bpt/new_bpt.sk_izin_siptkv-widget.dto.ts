import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSiptkvDto } from './new_bpt.sk_izin_siptkv.dto';

export class NewBptSkIzinSiptkvWidgetDto extends NewBptSkIzinSiptkvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
