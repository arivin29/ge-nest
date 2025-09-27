import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiuperkebunanDto } from './new_bpt.sk_izin_ossiuperkebunan.dto';

export class NewBptSkIzinOssiuperkebunanWidgetDto extends NewBptSkIzinOssiuperkebunanDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
