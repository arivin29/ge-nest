import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiokDto } from './new_bpt.sk_izin_ossiok.dto';

export class NewBptSkIzinOssiokWidgetDto extends NewBptSkIzinOssiokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
