import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTduppwDto } from './new_bpt.sk_izin_tduppw.dto';

export class NewBptSkIzinTduppwWidgetDto extends NewBptSkIzinTduppwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
