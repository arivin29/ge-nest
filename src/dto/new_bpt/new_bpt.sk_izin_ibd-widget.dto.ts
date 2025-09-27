import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIbdDto } from './new_bpt.sk_izin_ibd.dto';

export class NewBptSkIzinIbdWidgetDto extends NewBptSkIzinIbdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
