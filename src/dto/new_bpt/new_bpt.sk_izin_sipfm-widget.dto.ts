import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipfmDto } from './new_bpt.sk_izin_sipfm.dto';

export class NewBptSkIzinSipfmWidgetDto extends NewBptSkIzinSipfmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
