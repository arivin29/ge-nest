import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiuhortikulturaDto } from './new_bpt.sk_izin_ossiuhortikultura.dto';

export class NewBptSkIzinOssiuhortikulturaWidgetDto extends NewBptSkIzinOssiuhortikulturaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
