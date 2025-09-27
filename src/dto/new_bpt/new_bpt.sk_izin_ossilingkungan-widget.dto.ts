import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssilingkunganDto } from './new_bpt.sk_izin_ossilingkungan.dto';

export class NewBptSkIzinOssilingkunganWidgetDto extends NewBptSkIzinOssilingkunganDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
