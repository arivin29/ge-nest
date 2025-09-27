import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinTdpkpDto } from './new_bpt.sk_izin_tdpkp.dto';

export class NewBptSkIzinTdpkpWidgetDto extends NewBptSkIzinTdpkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
