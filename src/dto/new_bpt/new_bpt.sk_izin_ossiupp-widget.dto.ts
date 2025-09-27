import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiuppDto } from './new_bpt.sk_izin_ossiupp.dto';

export class NewBptSkIzinOssiuppWidgetDto extends NewBptSkIzinOssiuppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
