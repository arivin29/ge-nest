import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiutpDto } from './new_bpt.sk_izin_ossiutp.dto';

export class NewBptSkIzinOssiutpWidgetDto extends NewBptSkIzinOssiutpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
