import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIprDto } from './new_bpt.sk_izin_ipr.dto';

export class NewBptSkIzinIprWidgetDto extends NewBptSkIzinIprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
