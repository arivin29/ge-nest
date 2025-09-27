import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssitoDto } from './new_bpt.sk_izin_ossito.dto';

export class NewBptSkIzinOssitoWidgetDto extends NewBptSkIzinOssitoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
