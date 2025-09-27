import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiospkDto } from './new_bpt.sk_izin_ossiospk.dto';

export class NewBptSkIzinOssiospkWidgetDto extends NewBptSkIzinOssiospkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
