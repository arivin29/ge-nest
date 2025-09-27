import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssstpwDto } from './new_bpt.sk_izin_ossstpw.dto';

export class NewBptSkIzinOssstpwWidgetDto extends NewBptSkIzinOssstpwDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
