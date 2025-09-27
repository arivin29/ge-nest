import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdiDto } from './new_bpt.sk_izin_tdi.dto';

export class NewBptSkIzinTdiWidgetDto extends NewBptSkIzinTdiDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
