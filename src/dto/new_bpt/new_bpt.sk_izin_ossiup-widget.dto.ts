import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiupDto } from './new_bpt.sk_izin_ossiup.dto';

export class NewBptSkIzinOssiupWidgetDto extends NewBptSkIzinOssiupDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
