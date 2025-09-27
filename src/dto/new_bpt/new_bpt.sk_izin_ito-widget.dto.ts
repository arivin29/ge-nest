import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinItoDto } from './new_bpt.sk_izin_ito.dto';

export class NewBptSkIzinItoWidgetDto extends NewBptSkIzinItoDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
