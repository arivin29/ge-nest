import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIokopDto } from './new_bpt.sk_izin_iokop.dto';

export class NewBptSkIzinIokopWidgetDto extends NewBptSkIzinIokopDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
