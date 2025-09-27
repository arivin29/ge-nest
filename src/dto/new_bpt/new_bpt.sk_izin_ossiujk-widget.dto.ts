import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiujkDto } from './new_bpt.sk_izin_ossiujk.dto';

export class NewBptSkIzinOssiujkWidgetDto extends NewBptSkIzinOssiujkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
