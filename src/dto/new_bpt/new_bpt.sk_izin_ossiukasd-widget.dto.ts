import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiukasdDto } from './new_bpt.sk_izin_ossiukasd.dto';

export class NewBptSkIzinOssiukasdWidgetDto extends NewBptSkIzinOssiukasdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
