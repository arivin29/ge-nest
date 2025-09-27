import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiurphDto } from './new_bpt.sk_izin_ossiurph.dto';

export class NewBptSkIzinOssiurphWidgetDto extends NewBptSkIzinOssiurphDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
