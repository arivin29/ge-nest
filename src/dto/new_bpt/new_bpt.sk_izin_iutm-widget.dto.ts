import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIutmDto } from './new_bpt.sk_izin_iutm.dto';

export class NewBptSkIzinIutmWidgetDto extends NewBptSkIzinIutmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
