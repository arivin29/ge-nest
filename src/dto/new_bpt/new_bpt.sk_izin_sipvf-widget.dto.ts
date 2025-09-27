import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipvfDto } from './new_bpt.sk_izin_sipvf.dto';

export class NewBptSkIzinSipvfWidgetDto extends NewBptSkIzinSipvfDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
