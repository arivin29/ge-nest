import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTpprDto } from './new_bpt.sk_izin_tppr.dto';

export class NewBptSkIzinTpprWidgetDto extends NewBptSkIzinTpprDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
