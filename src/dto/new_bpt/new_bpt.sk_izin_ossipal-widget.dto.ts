import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipalDto } from './new_bpt.sk_izin_ossipal.dto';

export class NewBptSkIzinOssipalWidgetDto extends NewBptSkIzinOssipalDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
