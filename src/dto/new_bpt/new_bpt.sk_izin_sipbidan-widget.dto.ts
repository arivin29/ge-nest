import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipbidanDto } from './new_bpt.sk_izin_sipbidan.dto';

export class NewBptSkIzinSipbidanWidgetDto extends NewBptSkIzinSipbidanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
