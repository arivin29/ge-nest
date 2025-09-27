import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipbmDto } from './new_bpt.sk_izin_sipbm.dto';

export class NewBptSkIzinSipbmWidgetDto extends NewBptSkIzinSipbmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
