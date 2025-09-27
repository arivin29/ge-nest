import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiuiDto } from './new_bpt.sk_izin_ossiui.dto';

export class NewBptSkIzinOssiuiWidgetDto extends NewBptSkIzinOssiuiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
