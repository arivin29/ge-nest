import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiutsDto } from './new_bpt.sk_izin_ossiuts.dto';

export class NewBptSkIzinOssiutsWidgetDto extends NewBptSkIzinOssiutsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
